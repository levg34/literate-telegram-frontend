export interface IMessage {
    color?: string
    message: string
    sender?: string
    time?: Date
}

export interface IMessageJSON {
    message: string
    sender: string
    time: string
}

export class Message implements Required<IMessage> {
    message: string
    sender: string
    time: Date
    static ME = 'Me'
    color: string

    constructor(message: IMessage) {
        this.message = message.message
        this.sender = message.sender ?? Message.ME
        this.time = message.time ?? new Date()
        this.color = message.color ?? ''
    }

    toJSON(): Required<IMessageJSON> {
        const message: IMessageJSON = {
            ...this,
            time: this.time.toISOString()
        }
        return message
    }
}
