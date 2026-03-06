import { cn } from 'shared/utils/classMerge.util'

import * as styles from './Bubble.style'

interface Props {
    message: string
    time: string
    type: 'sent' | 'received'
}
const Bubble = ({ message, time, type }: Props) => {
    return (
        <div
            className={cn(
                styles.container,
                type === 'sent' && 'items-end self-end',
            )}
        >
            <div
                className={cn(
                    styles.message,
                    type === 'sent' && 'bg-primary',
                    type === 'received' && 'bg-secondary',
                )}
            >
                {message}
            </div>
            <div className={cn(styles.time, type === 'sent' && 'text-right')}>
                {time}
            </div>
        </div>
    )
}

export default Bubble
