import { NextRequest, NextResponse } from 'next/server'

import { chatStore } from 'stores/chat.store'

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ userId: string }> },
) {
    try {
        const { userId } = await params

        const chatList = chatStore.getState().chatList || []
        const chatByUserId = chatList.filter(
            (chat) => chat.sender.uid === userId,
        )

        if (chatByUserId.length === 0) {
            return NextResponse.json({ chatList: [] })
        }

        return NextResponse.json({ chatList: chatByUserId })
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 },
        )
    }
}
