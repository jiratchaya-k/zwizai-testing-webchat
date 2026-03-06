import clsx from 'clsx'

export const container = clsx(
    'bg-primary flex w-full items-center justify-between p-4 text-white shadow-md',
)

export const lineInfoContainer = clsx(
    'bg-foreground flex items-center gap-2 rounded-lg p-2',
)

export const profileImage = clsx('h-6 w-6 rounded-full')

export const displayName = clsx('text-sm font-medium text-neutral-800')

export const title = clsx('text-lg font-bold')
