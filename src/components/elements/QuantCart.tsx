// styleds
import { _QuantCart } from './style';

// Interfaces
import { QuantCartInterface } from '../../interfaces/QuantCart';

export default function QuantCart(data:QuantCartInterface){
    const { value } = data
    return (
        <_QuantCart>
            { value }
        </_QuantCart>
    )
}