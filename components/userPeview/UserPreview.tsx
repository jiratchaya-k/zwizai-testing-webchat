import { cn } from 'shared/utils/classMerge.util'

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
                'cursor-pointer px-4 py-2 text-left text-sm font-medium',
                active ? 'bg-secondary' : 'bg-transparent',
            )}
            onClick={onClick}
        >
            <span
                className={cn(
                    'font-bold',
                    active ? 'text-white' : 'text-black',
                )}
            >
                {username}
            </span>
            <p className="text-neutral-50">{message}</p>
        </button>
    )
}

export default UserPreview
