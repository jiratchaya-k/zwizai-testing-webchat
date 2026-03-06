import { create } from 'zustand'

export interface IUser {
    uid: string
    displayName: string
}

export interface IMessage {
    text: string
    timestamp: number
    type: 'sent' | 'received'
}

export interface IChat {
    sender: IUser
    messageList: IMessage[]
}

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
