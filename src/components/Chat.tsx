import { useState } from "react";
import { IMessage, Message } from "../classes/message";
import ChatBar from "./ChatBar";
import Messages from "./Messages";

const Chat = () => {
    const [messages, setMessages] = useState<IMessage[]>([])

    const addMessage = (message: string) => {
        if (!message) return
        const fullMessage = new Message({
            message
        })
        setMessages([...messages, fullMessage])
        // Test
        // setMessages([...messages, fullMessage, {
        //     ...fullMessage,
        //    sender: 'Luc' 
        // }])
    }

    return <div>
        <Messages messages={messages}/>
        <br/>
        <ChatBar addMessage={addMessage}/>
    </div>
}

export default Chat
