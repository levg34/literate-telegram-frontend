import TextField from "@mui/material/TextField";
import { SetStateAction, useState } from "react";

type Props = {
    addMessage: (message: string) => void
    enabled: boolean
}

const ChatBar = ({addMessage, enabled}: Props) => {
    const [field, setField] = useState<string>('')

    const pressEnter = (e: { [x: string]: any; code: string; }) => {
        if (e.code !== 'Enter' && e.key !== 'Enter') return
        addMessage(field)
        setField('')
    }

    return <div>
        <TextField fullWidth label="Message" variant="outlined" value={field} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setField(e.target.value)} onKeyPress={pressEnter} disabled={!enabled}/>
    </div>
}

export default ChatBar
