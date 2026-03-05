import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const endpoint = `${process.env.LINE_MESSAGING_API_ENDPOINT}/info`
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${process.env.LINE_OA_CHANNEL_ACCESS_TOKEN}`,
            },
        })
        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 },
        )
    }
}
