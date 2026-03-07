import { FC } from 'react'

import Image from 'next/image'

import { cn } from 'shared/utils/classMerge.util'

import * as styles from './UserPreview.style'

interface Props {
    username: string
    message: string
    profileImage: string
    active?: boolean
    onClick: () => void
}
const UserPreview: FC<Props> = ({
    active,
    username,
    message,
    profileImage,
    onClick,
}: Props) => {
    return (
        <button
            className={cn(
                styles.container,
                active ? 'bg-secondary hover:bg-secondary' : 'bg-transparent',
            )}
            onClick={onClick}
        >
            <Image
                src={profileImage}
                alt="profile image"
                width={40}
                height={40}
                className={styles.profileImage}
            />
            <div className={styles.messageContainer}>
                <span
                    className={cn(
                        styles.username,
                        active ? 'text-White' : 'text-black',
                    )}
                >
                    {username}
                </span>
                <p className={cn(styles.message, active && 'text-foreground')}>
                    {message}
                </p>
            </div>
        </button>
    )
}

export default UserPreview
