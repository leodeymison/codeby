// styleds
import { _FinalizeRequest, _Valores } from './style';
import { _Container, _Heading } from '../../styled/global';

// Components
import ButtonFunc from '../elements/ButtonFunc';

export default function FinalizeRequest() {
    return (
        <_FinalizeRequest>
            <_Container pd={1} dplay="flex" justifyC='space-between'>
                <_Valores>Total</_Valores>
                <_Valores>R$45,00</_Valores>
            </_Container>
            <_Container pd={1}  dplay="flex" justifyC='center'>
                <ButtonFunc 
                    text='Finalizar compra'
                 />
            </_Container>
        </_FinalizeRequest>
    )
} 