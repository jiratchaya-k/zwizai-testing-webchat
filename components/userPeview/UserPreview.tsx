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
                active ? 'bg-secondary' : 'bg-transparent',
            )}
            onClick={onClick}
        >
            <span
                className={cn(
                    styles.username,
                    active ? 'text-white' : 'text-black',
                )}
            >
                {username}
            </span>
            <p className={styles.message}>{message}</p>
        </button>
    )
}

export default UserPreview
