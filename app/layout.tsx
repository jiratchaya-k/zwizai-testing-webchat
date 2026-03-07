import { PropsWithChildren } from 'react'

import { Metadata } from 'next'

import './globals.css'
import Providers from './providers'

export const metadata: Metadata = {
    title: 'Webchat Testing By Jiratchaya K.',
    description:
        'A web chat testing application for LINE Official Account built with Next.js, React Query, and Zustand. Developed by Jiratchaya Kongmuang as part of the testing submission for ZWIZ.AI.',
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    type="image/png"
                    href="%PUBLIC_URL%/favicon-96x96.png"
                    sizes="96x96"
                />
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="%PUBLIC_URL%/favicon.svg"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <meta name="apple-mobile-web-app-title" content="Webchat" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
