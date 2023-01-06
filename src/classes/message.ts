export interface IMessage {
    message: string
    sender?: string
    time?: Date
}

export class Message implements IMessage {
    message: string
    sender: string
    time: Date
    static ME = 'Me'

    constructor(message: IMessage) {
        this.message = message.message
        this.sender = message.sender ?? Message.ME
        this.time = message.time ?? new Date()
    }
}
