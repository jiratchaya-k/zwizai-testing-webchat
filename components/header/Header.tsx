'use client'

import { FC } from 'react'

import Image from 'next/image'

import { lineStore } from '@stores/line.store'

import * as styles from './Header.style'

const Header: FC = () => {
    const { lineInfo } = lineStore((state) => state)

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
