// interfaces
import { ButtonFuncInterface } from '../../interfaces/ButtonFunc';

// Styled
import { _ButtonFunc } from './style';

export default function ButtonFunc(data:ButtonFuncInterface){
    const { text, Cart, BColor } = data

    function CartFunc(){
        Cart()
    }
    return (
        <_ButtonFunc BColor={BColor} onClick={CartFunc} >
            {text}
        </_ButtonFunc>
    )
}