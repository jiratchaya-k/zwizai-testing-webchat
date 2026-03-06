import { cn } from 'shared/utils/classMerge.util'

import * as styles from './UserPreview.style'

interface Props {
    username: string
    message: string
    active?: boolean
    onClick: () => void
}
const UserPreview = ({ active, username, message, onClick }: Props) => {
    return (
        <button
            className={cn(
                styles.container,
                active ? 'bg-secondary hover:bg-secondary' : 'bg-transparent',
            )}
            onClick={onClick}
        >
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
        </button>
    )
}

export default UserPreview
