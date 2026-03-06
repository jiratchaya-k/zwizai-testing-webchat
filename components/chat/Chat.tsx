'use client'
import { useState } from 'react'

import { useMutation, useQuery } from '@tanstack/react-query'

import { chatStore, IChat } from '@stores/chat.store'

import Bubble from './bubble/Bubble'

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
            return data.chatList
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

    return (
        <div className="grid w-full grid-rows-[1fr_200px]">
            <div className="grid grid-rows-[50px_1fr]">
                <div className="bg-secondary border-primary flex items-center border-b-2 px-4 font-bold text-white">
                    {chatHistory
                        ? chatHistory.sender.displayName
                        : 'Select a chat'}
                </div>
                <div className="flex h-full w-full flex-col items-start gap-4 overflow-y-scroll p-4">
                    {chatHistory?.messageList.map((message, index) => {
                        return (
                            <Bubble
                                key={index}
                                message={message.text}
                                time={message.timestamp.toString()}
                                type={message.type}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="mx-4 flex flex-col items-end justify-center gap-2">
                <textarea
                    className="border-primary w-full resize-none rounded-2xl border-2 p-4 focus:outline-none"
                    placeholder="Write Message..."
                    wrap="soft"
                    rows={3}
                    value={messageToSend}
                    onChange={(e) => setMessageToSend(e.target.value)}
                />
                <button
                    className="bg-primary cursor-pointer rounded-2xl px-10 py-3 text-white"
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    )
}

export default Chat
