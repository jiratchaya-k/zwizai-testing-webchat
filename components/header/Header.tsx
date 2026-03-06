'use client'

import Image from 'next/image'

import { useQuery } from '@tanstack/react-query'

import { lineStore } from '@stores/line.store'

import { ILineInfo } from '@shared/interfaces/line.interface'

import * as styles from './Header.style'

const Header = () => {
    const { lineInfo, setLineInfo } = lineStore((state) => state)

    useQuery<ILineInfo>({
        queryKey: ['lineInfo'],
        queryFn: async () => {
            const response = await fetch('/api/line/info')
            const data = await response.json()
            console.log('data', data)

            setLineInfo(data)
            return data
        },
        enabled: !lineInfo,
    })
    console.log('lineInfo', lineInfo)

    return (
        <div className={styles.container}>
            <div className={styles.lineInfoContainer}>
                {lineInfo && (
                    <>
                        <Image
                            src={lineInfo.profileImageUrl}
                            alt="Profile"
                            className={styles.profileImage}
                            width={24}
                            height={24}
                        />
                        <span className={styles.displayName}>
                            {lineInfo.displayName}{' '}
                            <span className="text-neutral-400">
                                ({lineInfo.basicId})
                            </span>
                        </span>
                    </>
                )}
            </div>
            <div>
                <span className={styles.title}>SWIZ.AI Testing Webchat</span> By
                Jiratchaya Kongmuang
            </div>
        </div>
    )
}

export default Header
