import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { IMessage } from "../classes/message"
import MessageBox from "./MessageBox"

type Props = {
    messages: IMessage[],
    color?: string
}

const MessageList = ({messages, color}: Props) => <Grid2 container spacing={2}>
    {messages.map((m,i) => <MessageBox key={i} message={m} color={color}/>)}
</Grid2>

const Messages = ({messages, color}: Props) => messages.length ? <MessageList messages={messages} color={color}/> : <div>
    No new messages.
</div>

export default Messages
