import { create } from 'zustand'

import { IChat } from '@shared/interfaces/chat.interface'

interface ChatState {
    chatList: IChat[]
    setChatList: (chatList: IChat[]) => void
    activeChat: IChat | null
    setActiveChat: (chat: IChat | null) => void
}

export const chatStore = create<ChatState>((set) => ({
    chatList: null,
    setChatList: (chatList) => set({ chatList }),
    activeChat: null,
    setActiveChat: (chat) => set({ activeChat: chat }),
}))
