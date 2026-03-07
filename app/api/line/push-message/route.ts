import PushMessageService from '@services/pushMessage.service'

export async function POST(request: Request) {
    const { userId, message } = await request.json()

    if (!message) {
        return Response.json(
            { success: false, error: 'Message is required' },
            { status: 400 },
        )
    }
    await PushMessageService.pushMessage(userId, message)

    return Response.json({ success: true })
}
