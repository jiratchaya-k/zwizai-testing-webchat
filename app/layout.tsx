import { PropsWithChildren } from 'react'

import './globals.css'
import Providers from './providers'

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
