// styled
import { _Message } from './style';

// interfaces
import { MessageType } from '../../interfaces/Message';

export default function Message(data: MessageType){
    const { msg } = data
    return (
        <_Message>
            {msg}
        </_Message>
    )
}