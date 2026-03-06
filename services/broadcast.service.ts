import { TextMessage } from '@line/bot-sdk'

import sendBroadcast from '@libs/line/broadcast.client'

const BoardcastService = {
    async sendMessage(textMessage: string) {
        try {
            const message: TextMessage = {
                type: 'text',
                text: textMessage,
            }

            await sendBroadcast([message])
        } catch (error) {
            console.error('Error sending broadcast message:', error)
        }
    },
}

export default BoardcastService
