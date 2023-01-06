import TextField from "@mui/material/TextField";
import { SetStateAction, useState } from "react";

type Props = {
    addMessage: (message: string) => void
}

const ChatBar = ({addMessage}: Props) => {
    const [field, setField] = useState<string>('')

    const pressEnter = (e: { code: string; }) => {
        if (e.code !== 'Enter') return
        addMessage(field)
        setField('')
    }

    return <div>
        <TextField fullWidth label="Message" variant="outlined" value={field} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setField(e.target.value)} onKeyPress={pressEnter}/>
    </div>
}

export default ChatBar
