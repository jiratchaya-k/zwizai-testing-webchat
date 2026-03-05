import { TextMessage } from '@line/bot-sdk'

export const pushMessage = async (to: string, messages: TextMessage[]) => {
    try {
        const endpoint = `${process.env.LINE_MESSAGING_API_ENDPOINT}/message/push`
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.LINE_OA_CHANNEL_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to,
                messages,
            }),
        })

        const data = await response.json()
        if (!response.ok) {
            throw new Error(JSON.stringify(data))
        }
        console.log('Push message response:', data)
    } catch (error) {
        console.error('Error sending push message:', error)
    }
}
