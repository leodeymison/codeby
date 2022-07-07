// interfaces
import { ButtonFuncInterface } from '../../interfaces/ButtonFunc';

// Styled
import { _ButtonFunc } from './style';

export default function ButtonFunc(data:ButtonFuncInterface){
    const { text } = data
    return (
        <_ButtonFunc>
            {text}
        </_ButtonFunc>
    )
}