export const getLineInfo = async () => {
    try {
        const endpoint = `${process.env.LINE_MESSAGING_API_ENDPOINT}/info`
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${process.env.LINE_OA_CHANNEL_ACCESS_TOKEN}`,
            },
        })
        const data = await response.json()

        if (!response.ok) {
            throw new Error(JSON.stringify(data))
        }

        return data
    } catch (error) {
        console.error('Error getting line info:', error)
    }
}
