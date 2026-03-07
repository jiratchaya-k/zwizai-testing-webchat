import { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sprofile.line-scdn.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'profile.line-scdn.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

export default nextConfig
