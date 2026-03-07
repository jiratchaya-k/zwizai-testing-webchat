import { IChat } from '@shared/interfaces/chat.interface'

const globalForChat = globalThis as unknown as {
    chatHistory?: IChat[]
}

export const chatHistory =
    globalForChat.chatHistory ?? (globalForChat.chatHistory = [])
