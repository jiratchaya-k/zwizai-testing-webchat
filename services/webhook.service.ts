import { getUserProfile } from '@libs/line/user.client'

import { IMessage, IUser } from '@shared/interfaces/chat.interface'

import { chatHistory } from '@server/chatHistory.server'

const WebhookService = {
    async receiveMessageEvent(events: MessageEvent[]) {
        try {
            await Promise.all(
                events.map(async (event: any): Promise<void> => {
                    const userId = event.source.userId

                    const existingChat = chatHistory.find(
                        (chat) => chat.sender.uid === userId,
                    )

                    const newMessage: IMessage = {
                        text: event.message.text,
                        timestamp: event.timestamp,
                        type: 'received',
                    }

                    if (existingChat) {
                        existingChat.messageList.push(newMessage)
                        return
                    }

                    const userProfile = await getUserProfile(userId)

                    const sender: IUser = {
                        uid: userId,
                        displayName: userProfile.displayName,
                        profileImageUrl: userProfile.pictureUrl,
                    }
                    chatHistory.push({
                        sender,
                        messageList: [newMessage],
                    })
                }),
            )
        } catch (error) {
            console.error('Error receiving message:', error)
        }
    },
}

export default WebhookService
