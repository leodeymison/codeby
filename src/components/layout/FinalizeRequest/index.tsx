// styleds
import { _FinalizeRequest, _Valores } from './style';
import { _Container, _Heading } from '../../../styled/global';

// Components
import ButtonFunc from '../../elements/ButtonFunc';
import Message from '../../elements/Message';

interface Finalizar {
    value: number
}

export default function FinalizeRequest(data:Finalizar) {
    const { value } = data
    return (
        <_FinalizeRequest>
            <_Container pd={1} dplay="flex" justifyC='space-between'>
                <_Valores>Total</_Valores>
                <_Valores>R${value}</_Valores>
            </_Container>
            {
                value > 10 && 
                <_Container pd={1} dplay="flex" justifyC='center'>
                    <Message msg='Parabéns, sua compra tem frete grátis !' />
                </_Container>
            }
            <_Container pd={1}  dplay="flex" justifyC='center'>
                <ButtonFunc 
                    BColor='#379ef2'
                    text='Finalizar compra'
                 />
            </_Container>
        </_FinalizeRequest>
    )
} 