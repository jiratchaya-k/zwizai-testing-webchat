import { NextRequest, NextResponse } from 'next/server'

import { chatHistory } from '@server/chatHistory.server'

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ userId: string }> },
) {
    try {
        const { userId } = await params

        const chatByUserId = chatHistory.filter(
            (chat) => chat.sender.uid === userId,
        )

        if (chatByUserId.length === 0) {
            return NextResponse.json([])
        }

        return NextResponse.json(chatByUserId)
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 },
        )
    }
}
