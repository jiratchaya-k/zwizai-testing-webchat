import clsx from 'clsx'

export const container = clsx(
    'cursor-pointer px-4 py-2 text-left text-sm font-medium transition-colors duration-200',
    'hover:bg-neutral-300',
)

export const username = clsx('font-bold')

export const message = clsx(
    'overflow-hidden text-xs font-normal text-ellipsis whitespace-nowrap text-neutral-50',
)
