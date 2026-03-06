import { chatStore } from 'stores/chat.store'

import { getUserProfile } from '@libs/line/user.client'

import { IChat, IMessage, IUser } from '@shared/interfaces/chat.interface'

const WebhookService = {
    async receiveMessageEvent(events: MessageEvent[]) {
        try {
            const newChatList = events.map(
                async (event: any): Promise<IChat> => {
                    const userId = event.source.userId
                    const chatHistory = chatStore.getState().chatList || []
                    const existingChat = chatHistory.find(
                        (chat) => chat.sender.uid === userId,
                    )

                    if (existingChat) {
                        existingChat.messageList.push({
                            text: event.message.text,
                            timestamp: event.timestamp,
                            type: 'received',
                        })
                        return existingChat
                    }

                    const userProfile = await getUserProfile(userId)

                    const sender: IUser = {
                        uid: userId,
                        displayName: userProfile.displayName,
                    }

                    const messageList: IMessage[] = [
                        {
                            text: event.message.text,
                            timestamp: event.timestamp,
                            type: 'received',
                        },
                    ]
                    return {
                        sender,
                        messageList,
                    }
                },
            )

            chatStore.setState({
                chatList: await Promise.all(newChatList),
            })
        } catch (error) {
            console.error('Error receiving message:', error)
        }
    },
}

export default WebhookService
