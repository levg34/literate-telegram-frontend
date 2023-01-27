import Card from "@mui/material/Card"
import Grid2 from "@mui/material/Unstable_Grid2"
import React from "react"
import { IMessage, Message } from "../classes/message"
import Linkify from 'react-linkify'

type Props = {
    message: IMessage,
    color?: string
}

function getStyle(message: IMessage, color?: string) {
    let backgroundColor

    if (message.sender === 'Server') {
        backgroundColor = '#D3D3D3'
    } else if (message.sender === Message.ME && color) {
        backgroundColor = color
    } else if (message.color) {
        backgroundColor = message.color
    } else {
        return
    }

    return { backgroundColor }
}

const MessageBox = ({message, color}: Props) => <React.Fragment>
    {message.sender === Message.ME && <Grid2 lg={8} md={6} xs={4}></Grid2>}
    <Grid2 lg={4} md={6} xs={8}>
        <Card style={getStyle(message, color)}>
            <Linkify componentDecorator={(href,text,key) => <a href={href} key={key} target="_blank">
                {text}
            </a>}>{message.message}</Linkify>
        </Card>
    </Grid2>
    {message.sender !== Message.ME && <Grid2 lg={8} md={6} xs={4}></Grid2>}
</React.Fragment>

export default MessageBox
