import { useState } from 'react'
import useWebSocket from 'react-use-websocket'
import { IMessage, Message } from '../classes/message'
import ChatBar from './ChatBar'
import Messages from './Messages'

const Chat = () => {
    const [messages, setMessages] = useState<Required<IMessage>[]>([])

    const { sendMessage } = useWebSocket('wss://echo-websocket.hoppscotch.io', {
        onMessage: event => {
            console.log(event.data)
            setMessages([...messages, new Message({
                message: event.data,
                sender: 'Server'
            })])
        }
    })

    const addMessage = (message: string) => {
        if (!message) return
        const fullMessage = new Message({
            message
        })
        setMessages([...messages, fullMessage])
        sendMessage(fullMessage.message)
    }

    return <div>
        <Messages messages={messages}/>
        <br/>
        <ChatBar addMessage={addMessage}/>
    </div>
}

export default Chat
