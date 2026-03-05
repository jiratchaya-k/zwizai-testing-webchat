export const getUserProfile = async (userId: string) => {
    try {
        const endpoint = `${process.env.LINE_MESSAGING_API_ENDPOINT}/profile/${userId}`
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.LINE_OA_CHANNEL_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()

        if (!response.ok) {
            throw new Error(JSON.stringify(data))
        }

        return data
    } catch (error) {
        console.error('Error getting user profile:', error)
    }
}
