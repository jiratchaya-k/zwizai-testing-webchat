import clsx from 'clsx'

export const container = clsx(
    'bg-foreground flex h-full w-full flex-col overflow-y-scroll rounded-2xl text-white shadow-lg',
)

export const title = clsx('text-md text-secondary mb-2 px-4 pt-4 font-bold')

export const totalChats = clsx('text-sm font-normal text-neutral-400')

export const emtyState = clsx('mt-4 text-center text-sm text-neutral-500')

export const devider = clsx('border-t border-neutral-300')
