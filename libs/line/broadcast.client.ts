import { TextMessage } from '@line/bot-sdk'

const sendBroadcast = async (messages: TextMessage[]) => {
    try {
        const endpoint = `${process.env.LINE_MESSAGING_API_ENDPOINT}/message/broadcast`

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.LINE_OA_CHANNEL_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages,
            }),
        })

        const data = await response.json()
        if (!response.ok) {
            throw new Error(JSON.stringify(data))
        }
        console.log('Broadcast response:', data)
    } catch (error) {
        console.error('Error sending broadcast message:', error)
        throw error
    }
}

export default sendBroadcast
