import { _Heading } from '../../../styled/global';
import { _Card, _Img, _Span } from './style'

// interfaces
import { ProductInterface } from '../../../interfaces/product';

import ButtonFunc from '../../elements/ButtonFunc';
import { useState } from 'react';
 
export default function ProductCart(data:ProductInterface) {
    const { id, name, sellingPrice, price, imageUrl } = data;
    const [clickBtn, setClickBtn] = useState(false);

    function addCart() {
        console.log('Clicou');
        return setClickBtn(true)
    }

    function removeCart() {
        return setClickBtn(false)
    }

    return (
        <_Card>
            <_Img
                src={imageUrl} 
                alt={name} />
            <_Heading level={3}>{name}</_Heading>
            <br />
            <_Heading level={3}>
                <_Span>R$ {sellingPrice}</_Span> - 
                R$ {price}
            </_Heading>
            <br />
            {
                clickBtn ? 
                <ButtonFunc text='Remover' BColor='#c4c4c4' Cart={removeCart} /> : 
                <ButtonFunc text='Adicionar' BColor='#379ef2' Cart={addCart} />
            }
        </_Card>
    )
}