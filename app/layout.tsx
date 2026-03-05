import { PropsWithChildren } from 'react'

import './globals.css'

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
