// styleds
import { _QuantCart } from './style';

interface QuantCartInterface {
    value:number
}

export default function QuantCart(data:QuantCartInterface){
    const { value } = data
    return (
        <_QuantCart>
            { value }
        </_QuantCart>
    )
}