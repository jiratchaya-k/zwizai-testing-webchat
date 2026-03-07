import BoardcastService from '@services/broadcast.service'

export async function POST(request: Request) {
    const { message } = await request.json()

    if (!message) {
        return Response.json(
            { success: false, error: 'Message is required' },
            { status: 400 },
        )
    }
    await BoardcastService.sendMessage(message)

    return Response.json({ success: true })
}
