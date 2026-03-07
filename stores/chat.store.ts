import { create } from 'zustand'

import { IChat } from '@shared/interfaces/chat.interface'

interface ChatState {
    activeChat: IChat | null
    setActiveChat: (chat: IChat | null) => void
}

export const chatStore = create<ChatState>((set) => ({
    activeChat: null,
    setActiveChat: (chat) => set({ activeChat: chat }),
}))
