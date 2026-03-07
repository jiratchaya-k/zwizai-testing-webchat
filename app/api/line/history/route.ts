import { NextResponse } from 'next/server'

import { chatHistory } from '@server/chatHistory.server'

export async function GET() {
    try {
        return NextResponse.json(chatHistory)
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 },
        )
    }
}
