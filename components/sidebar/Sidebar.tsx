'use client'
import { Fragment } from 'react/jsx-runtime'

import { useQuery } from '@tanstack/react-query'
import UserPreview from 'components/userPeview/UserPreview'

import { chatStore, IChat } from '@stores/chat.store'

const Sidebar = () => {
    const { activeChat, setActiveChat } = chatStore((state) => state)

    const { data } = useQuery<IChat[]>({
        queryKey: ['chatList'],
        queryFn: async () => {
            const res = await fetch('/api/line/history')
            const data = await res.json()
            return data.chatList
        },
        refetchInterval: 1000,
    })

    const renderDevider = () => <div className="border-primary border-t-2" />
    return (
        <div className="border-primary flex h-full w-full flex-col overflow-y-scroll border-r-2 py-4 text-white">
            <h2 className="text-md text-primary mb-2 px-4 font-bold">Chat</h2>
            {renderDevider()}
            {data?.length > 0 ? (
                data.map((chat: IChat) => (
                    <Fragment key={chat.sender.uid}>
                        <UserPreview
                            username={chat.sender.displayName}
                            message={
                                chat.messageList[chat.messageList.length - 1]
                                    ?.text
                            }
                            active={chat.sender.uid === activeChat?.sender.uid}
                            onClick={() => setActiveChat(chat)}
                        />
                        {renderDevider()}
                    </Fragment>
                ))
            ) : (
                <div className="mt-4 text-center text-gray-500">
                    Waiting for chats...
                </div>
            )}
        </div>
    )
}

export default Sidebar
