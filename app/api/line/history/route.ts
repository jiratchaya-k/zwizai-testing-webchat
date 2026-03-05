import { NextResponse } from 'next/server'

import { chatStore } from 'stores/chat.store'

export async function GET() {
    try {
        const chatList = chatStore.getState().chatList || []
        return NextResponse.json({ chatList })
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 },
        )
    }
}
