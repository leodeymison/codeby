// styled
import { _Message } from './style';

// interfaces
interface Message {
    msg: string
}

export default function Message(data: Message){
    const { msg } = data
    return (
        <_Message>
            {msg}
        </_Message>
    )
}