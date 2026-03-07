'use client'
import { useState } from 'react'
import { HiChatBubbleLeftRight } from 'react-icons/hi2'

import Image from 'next/image'

import { useMutation, useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'

import { chatStore } from '@stores/chat.store'

import { IChat } from '@shared/interfaces/chat.interface'
import { cn } from '@shared/utils/classMerge.util'

import Bubble from './bubble/Bubble'
import * as styles from './Chat.style'

const Chat = () => {
    const [messageToSend, setMessageToSend] = useState('')

    const { activeChat } = chatStore((state) => state)

    const { data } = useQuery<IChat[]>({
        queryKey: ['chatHistory', activeChat?.sender.uid],
        queryFn: async () => {
            const res = await fetch(
                `/api/line/history/${activeChat?.sender.uid}`,
            )
            const data = await res.json()
            return data
        },
        refetchInterval: 1000,
        enabled: !!activeChat?.sender.uid,
    })

    const chatHistory = data?.[0] || null

    const { mutate } = useMutation({
        mutationKey: ['pushMessage', chatHistory?.sender.uid, messageToSend],
        mutationFn: async (message: string) => {
            const res = await fetch('/api/line/push-message', {
                method: 'POST',
                body: JSON.stringify({
                    userId: chatHistory?.sender.uid,
                    message,
                }),
            })

            return res.json()
        },
    })

    const handleSendMessage = async () => {
        mutate(messageToSend)
        setMessageToSend('')
    }

    const renderEmptyState = () => (
        <div className={styles.emptyState}>
            <HiChatBubbleLeftRight className={styles.emptyStateIcon} />
            Select a chat to start messaging
        </div>
    )

    return (
        <div className="p-4">
            <div
                className={cn(
                    styles.container,
                    !chatHistory && 'flex items-center justify-center',
                )}
            >
                {chatHistory ? (
                    <>
                        <div className={styles.chatHeader}>
                            <Image
                                src={chatHistory?.sender.profileImageUrl}
                                alt="profile image"
                                width={40}
                                height={40}
                                className={styles.profileImage}
                            />
                            {chatHistory?.sender.displayName}
                        </div>
                        <div className={styles.chatBox}>
                            {chatHistory?.messageList.map((message, index) => {
                                return (
                                    <Bubble
                                        key={index}
                                        message={message.text}
                                        time={dayjs(message.timestamp).format(
                                            'HH:mm',
                                        )}
                                        type={message.type}
                                    />
                                )
                            })}
                        </div>
                        {activeChat && (
                            <div className={styles.chatInput}>
                                <textarea
                                    className={styles.textarea}
                                    placeholder="Write Message..."
                                    wrap="soft"
                                    rows={2}
                                    value={messageToSend}
                                    onChange={(e) =>
                                        setMessageToSend(e.target.value)
                                    }
                                />
                                <button
                                    className={styles.sendButton}
                                    onClick={handleSendMessage}
                                >
                                    Send
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    renderEmptyState()
                )}
            </div>
        </div>
    )
}

export default Chat
