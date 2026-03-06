import { FC } from 'react'

import Chat from '@components/chat/Chat'
import Header from '@components/header/Header'
import Sidebar from '@components/sidebar/Sidebar'

const HomePage: FC = () => {
    return (
        <div className="h-dvh w-full">
            <Header />
            <div className="grid h-[calc(100dvh-60px)] w-full grid-cols-[300px_1fr]">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default HomePage
