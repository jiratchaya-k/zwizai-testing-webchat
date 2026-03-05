import { FC } from 'react'

import Header from '@components/layout/Header'
import Sidebar from '@components/sidebar/Sidebar'

const HomePage: FC = () => {
    return (
        <div className="h-dvh w-full">
            <Header />
            <div className="flex h-[calc(100dvh-60px)] w-full">
                <Sidebar />
            </div>
        </div>
    )
}

export default HomePage
