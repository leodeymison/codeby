// styleds
import { _Quant, _QuantBox } from './style';

// interfaces
import { QuantatyInterface } from '../../interfaces/Quantaty';

export default function Quantaty(data:QuantatyInterface){
    const { value, add, back } = data
    
    return (
        <_QuantBox>
            <_Quant BColor='red' color='#fff' onClick={back}>-</_Quant>
            <_Quant BColor='#fff'>{value}</_Quant>
            <_Quant BColor='#009fff' color='#fff' onClick={add}>+</_Quant>
        </_QuantBox>
    )
}