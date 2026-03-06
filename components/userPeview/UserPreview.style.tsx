import clsx from 'clsx'

export const container = clsx(
    'flex cursor-pointer items-center justify-start gap-2 px-4 py-2 text-left text-sm font-medium transition-colors duration-200',
    'hover:bg-neutral-300',
)

export const profileImage = clsx('h-10 w-10 rounded-full')

export const messageContainer = clsx(
    'flex w-[calc(100%-44px)] flex-col items-start gap-1',
)

export const username = clsx('font-bold')

export const message = clsx(
    'w-full overflow-hidden text-xs font-normal text-ellipsis whitespace-nowrap text-neutral-50',
)
