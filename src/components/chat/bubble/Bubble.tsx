import { cn } from '@shared/utils/classMerge.util'

interface Props {
    message: string
    time: string
    type: 'sent' | 'received'
}
const Bubble = ({ message, time, type }: Props) => {
    return (
        <div
            className={cn('flex flex-col gap-1', type === 'sent' && 'self-end')}
        >
            <div
                className={cn(
                    'rounded-2xl p-4 text-white',
                    type === 'sent' && 'bg-primary',
                    type === 'received' && 'bg-secondary',
                )}
            >
                {message}
            </div>
            <div
                className={cn(
                    'px-2 text-xs text-neutral-400',
                    type === 'sent' && 'text-right',
                )}
            >
                {time}
            </div>
        </div>
    )
}

export default Bubble
