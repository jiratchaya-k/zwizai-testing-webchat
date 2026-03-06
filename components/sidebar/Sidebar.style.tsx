import clsx from 'clsx'

export const container = clsx(
    'bg-foreground flex h-full w-full flex-col overflow-y-scroll rounded-2xl text-white shadow-lg',
)

export const title = clsx(
    'text-md text-primary mb-2 flex items-center gap-1 px-4 pt-4 font-bold',
)

export const totalChats = clsx('text-sm font-normal text-neutral-400')

export const emptyState = clsx(
    'mt-4 flex flex-col items-center gap-2 text-center text-xs text-neutral-400',
)

export const emptyStateIcon = clsx('-mt-1 h-5 w-5')

export const devider = clsx('border-t border-neutral-300')
