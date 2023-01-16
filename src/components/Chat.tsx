import { useState } from 'react'
import useWebSocket from 'react-use-websocket'
import { IMessage, IMessageJSON, Message } from '../classes/message'
import ChatBar from './ChatBar'
import Messages from './Messages'

const Chat = () => {
    const [messages, setMessages] = useState<Required<IMessage>[]>([])

    const { sendJsonMessage } = useWebSocket(import.meta.env.VITE_WS_URL ?? 'ws://localhost:8080', {
        onMessage: event => {
            const received: IMessageJSON = JSON.parse(event.data)
            const corrected = {
                ...received,
                sender: received.sender ? (received.sender !== Message.ME ? received.sender : 'Unknown') : 'Server',
                time: new Date(received.time)
            }
            console.log(corrected)
            setMessages([...messages, new Message(corrected)])
        }
    })

    const addMessage = (message: string) => {
        if (!message) return
        const fullMessage = new Message({
            message
        })
        setMessages([...messages, fullMessage])
        sendJsonMessage(fullMessage.toJSON())
    }

    return <div>
        <Messages messages={messages}/>
        <br/>
        <ChatBar addMessage={addMessage}/>
    </div>
}

export default Chat
