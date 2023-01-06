import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { IMessage } from "../classes/message"
import MessageBox from "./MessageBox"

type Props = {
    messages: IMessage[]
}

const MessageList = ({messages}: Props) => <Grid2 container spacing={2}>
    {messages.map((m,i) => <MessageBox key={i} message={m}/>)}
</Grid2>

const Messages = ({messages}: Props) => messages.length ? <MessageList messages={messages}/> : <div>
    No new messages.
</div>

export default Messages
