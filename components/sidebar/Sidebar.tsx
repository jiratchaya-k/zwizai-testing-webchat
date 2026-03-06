'use client'
import { Fragment } from 'react/jsx-runtime'

import { useQuery } from '@tanstack/react-query'
import UserPreview from 'components/userPeview/UserPreview'

import { chatStore, IChat } from '@stores/chat.store'

import * as styles from './Sidebar.style'

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

    return (
        <div className="p-4">
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Chats{' '}
                    <span className={styles.totalChats}>
                        ({data?.length || 0})
                    </span>
                </h2>

                <div className={styles.devider} />

                {data?.length > 0 ? (
                    data.map((chat: IChat) => (
                        <Fragment key={chat.sender.uid}>
                            <UserPreview
                                username={chat.sender.displayName}
                                message={
                                    chat.messageList[
                                        chat.messageList.length - 1
                                    ]?.text
                                }
                                active={
                                    chat.sender.uid === activeChat?.sender.uid
                                }
                                onClick={() => setActiveChat(chat)}
                            />
                        </Fragment>
                    ))
                ) : (
                    <div className={styles.emtyState}>Waiting for chats...</div>
                )}
            </div>
        </div>
    )
}

export default Sidebar
