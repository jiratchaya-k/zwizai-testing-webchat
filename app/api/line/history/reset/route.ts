import { NextResponse } from 'next/server'

import { chatHistory } from '@server/chatHistory.server'

export async function POST() {
    try {
        chatHistory.splice(0)
        return NextResponse.json({ message: 'Reset chat history successfully' })
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 },
        )
    }
}
