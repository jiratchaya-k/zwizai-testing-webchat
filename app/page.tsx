'use client'

import { FC } from 'react'

import { useQuery } from '@tanstack/react-query'

import Chat from '@components/chat/Chat'
import Header from '@components/header/Header'
import Sidebar from '@components/sidebar/Sidebar'
import Spinner from '@components/spinner/Spinner'

import { lineStore } from '@stores/line.store'

import { ILineInfo } from '@shared/interfaces/line.interface'

const HomePage: FC = () => {
    const { lineInfo, setLineInfo } = lineStore((state) => state)

    useQuery<ILineInfo>({
        queryKey: ['lineInfo'],
        queryFn: async () => {
            const response = await fetch('/api/line/info')
            const data = await response.json()

            setLineInfo(data)
            return data
        },
        enabled: !lineInfo,
    })

    if (!lineInfo) {
        return (
            <div className="flex h-dvh w-full items-center justify-center bg-[#00000050]">
                <Spinner size={40} color="#fa5c5c" />
            </div>
        )
    }

    return (
        <div className="h-dvh w-full">
            <Header />
            <div className="grid h-[calc(100dvh-72px)] w-full grid-cols-[300px_1fr]">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default HomePage
