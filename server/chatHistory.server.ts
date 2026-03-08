import { IChat } from '@shared/interfaces/chat.interface'

declare global {
    var chatHistory: IChat[]
}
export const chatHistory =
    globalThis.chatHistory ?? (globalThis.chatHistory = [])
