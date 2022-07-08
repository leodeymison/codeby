import { _Heading } from '../../../styled/global';
import { _Card, _Img, _Span } from './style'

// interfaces
import { ProductInterface } from '../../../interfaces/product';
import { useState } from 'react';
import ButtonFunc from '../../elements/ButtonFunc';
 
export default function ProductCart(data:ProductInterface) {
    const { name, sellingPrice, price, imageUrl, quantity } = data
    const [value, setValue] = useState(quantity)
    const add = () => {return setValue(value+1)}
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
            <ButtonFunc text='Adicionar' />
        </_Card>
    )
}