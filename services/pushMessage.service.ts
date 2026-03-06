import { TextMessage } from '@line/bot-sdk'

import { chatStore, IChat } from '@stores/chat.store'

import { pushMessage } from '@libs/line/message.client'

const PushMessageService = {
    async pushMessage(userId: string, textMessage: string) {
        try {
            const message: TextMessage = {
                type: 'text',
                text: textMessage,
            }

            const chatHistory = chatStore.getState().chatList || []
            const existingChat = chatHistory.find(
                (chat) => chat.sender.uid === userId,
            )

            if (existingChat) {
                existingChat.messageList.push({
                    text: textMessage,
                    timestamp: Date.now(),
                    type: 'sent',
                })
                chatStore.setState({
                    chatList: [...chatHistory],
                })
            } else {
                const newChat: IChat = {
                    sender: {
                        uid: userId,
                        displayName: 'LINE OA',
                    },
                    messageList: [
                        {
                            text: textMessage,
                            timestamp: Date.now(),
                            type: 'sent',
                        },
                    ],
                }
                chatStore.setState({
                    chatList: [...chatHistory, newChat],
                })
            }

            await pushMessage(userId, [message])
        } catch (error) {
            console.error('Error pushing message:', error)
        }
    },
}

export default PushMessageService
