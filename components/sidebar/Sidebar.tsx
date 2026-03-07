'use client'
import { FC } from 'react'
import { BsChatDotsFill } from 'react-icons/bs'
import { Fragment } from 'react/jsx-runtime'

import { useQuery } from '@tanstack/react-query'
import UserPreview from 'components/userPeview/UserPreview'

import { chatStore } from '@stores/chat.store'

import { IChat } from '@shared/interfaces/chat.interface'

import * as styles from './Sidebar.style'

const Sidebar: FC = () => {
    const { activeChat, setActiveChat } = chatStore((state) => state)

    const { data } = useQuery<IChat[]>({
        queryKey: ['chatHistory'],
        queryFn: async () => {
            const res = await fetch('/api/line/history')
            const data = await res.json()
            return data
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
                                message={chat.messageList.at(-1)?.text}
                                profileImage={chat.sender.profileImageUrl}
                                active={
                                    chat.sender.uid === activeChat?.sender.uid
                                }
                                onClick={() => setActiveChat(chat)}
                            />
                        </Fragment>
                    ))
                ) : (
                    <div className={styles.emptyState}>
                        <BsChatDotsFill className={styles.emptyStateIcon} />
                        Start a conversation
                        <br />
                        by sending a message to LINE OA!
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sidebar
