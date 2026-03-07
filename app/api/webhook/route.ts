import WebhookService from '@services/webhook.service'

export async function POST(request: Request) {
    const req = await request.json()

    WebhookService.receiveMessageEvent(req.events)

    return Response.json({ success: true })
}
