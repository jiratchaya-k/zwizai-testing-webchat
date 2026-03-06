import clsx from 'clsx'

export const container = clsx(
    'bg-foreground grid h-full w-full grid-rows-[50px_calc(100dvh-342px)_200px] overflow-hidden rounded-2xl shadow-lg',
)

export const chatHeader = clsx(
    'text-secondary flex items-center border-b border-neutral-300 px-4 font-bold',
)

export const chatBox = clsx(
    'flex h-full w-full flex-col items-start gap-4 overflow-y-scroll p-4',
)

export const chatInput = clsx(
    'flex flex-col items-end justify-center gap-2 border-t border-neutral-300 px-4',
)

export const textarea = clsx(
    'w-full resize-none rounded-2xl bg-white p-4 shadow-md focus:outline-none',
)

export const sendButton = clsx(
    'bg-primary cursor-pointer rounded-2xl px-10 py-3 text-white shadow-md',
)

export const emptyState = clsx('text-center text-sm text-neutral-400')

export const emptyStateIcon = clsx('mx-auto mb-4 h-16 w-16 text-neutral-400')
