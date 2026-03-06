import clsx from 'clsx'

export const container = clsx(
    'grid h-full w-full grid-rows-[50px_calc(100dvh-310px)_200px]',
)

export const chatHeader = clsx(
    'bg-secondary border-primary flex items-center border-b-2 px-4 font-bold text-white',
)

export const chatBox = clsx(
    'flex h-full w-full flex-col items-start gap-4 overflow-y-scroll p-4',
)

export const chatInput = clsx(
    'border-primary flex flex-col items-end justify-center gap-2 border-t-2 px-4',
)

export const textarea = clsx(
    'border-primary w-full resize-none rounded-2xl border-2 p-4 shadow-md focus:outline-none',
)

export const sendButton = clsx(
    'bg-primary cursor-pointer rounded-2xl px-10 py-3 text-white shadow-md',
)
