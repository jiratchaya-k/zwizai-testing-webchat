import { TextMessage } from '@line/bot-sdk'

import { lineStore } from '@stores/line.store'

import { pushMessage } from '@libs/line/message.client'

import { IChat } from '@shared/interfaces/chat.interface'

import { chatHistory } from '@server/chatHistory.server'

const PushMessageService = {
    async pushMessage(userId: string, textMessage: string) {
        try {
            const message: TextMessage = {
                type: 'text',
                text: textMessage,
            }

            const lineInfo = lineStore.getState().lineInfo

            const existingChat = chatHistory.find(
                (chat) => chat.sender.uid === userId,
            )

            if (existingChat) {
                existingChat.messageList.push({
                    text: textMessage,
                    timestamp: Date.now(),
                    type: 'sent',
                })
            } else {
                const newChat: IChat = {
                    sender: {
                        uid: userId,
                        displayName: lineInfo?.displayName,
                        profileImageUrl: lineInfo?.profileImageUrl,
                    },
                    messageList: [
                        {
                            text: textMessage,
                            timestamp: Date.now(),
                            type: 'sent',
                        },
                    ],
                }
                chatHistory.push(newChat)
            }

            await pushMessage(userId, [message])
        } catch (error) {
            console.error('Error pushing message:', error)
        }
    },
}

export default PushMessageService
