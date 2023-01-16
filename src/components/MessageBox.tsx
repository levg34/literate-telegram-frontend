
import Card from "@mui/material/Card"
import Grid2 from "@mui/material/Unstable_Grid2"
import React from "react"
import { IMessage, Message } from "../classes/message"

type Props = {
    message: IMessage
}

const MessageBox = ({message}: Props) => <React.Fragment>
    {message.sender === Message.ME && <Grid2 lg={8} md={6} xs={4}></Grid2>}
    <Grid2 lg={4} md={6} xs={8}>
        <Card style={message.sender === 'Server' ? {backgroundColor: '#D3D3D3'} : undefined}>
            {message.message}
        </Card>
    </Grid2>
    {message.sender !== Message.ME && <Grid2 lg={8} md={6} xs={4}></Grid2>}
</React.Fragment>

export default MessageBox
