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
