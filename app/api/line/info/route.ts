import { NextResponse } from 'next/server'

import LineService from '@services/line.service'

export async function GET() {
    try {
        const response = await LineService.getInfo()
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 },
        )
    }
}
