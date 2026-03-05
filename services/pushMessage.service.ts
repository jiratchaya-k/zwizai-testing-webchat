import { TextMessage } from '@line/bot-sdk'

import { pushMessage } from '@libs/line/message.client'

const PushMessageService = {
    async pushMessage(userId: string, textMessage: string) {
        try {
            const message: TextMessage = {
                type: 'text',
                text: textMessage,
            }

            await pushMessage(userId, [message])
        } catch (error) {
            console.error('Error pushing message:', error)
        }
    },
}

export default PushMessageService
