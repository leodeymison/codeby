import { _Container, _Heading } from '../../../styled/global';
import { _Card, _Img, _Span } from './style'

// interfaces
import { ProductInterface } from '../../../interfaces/product';
import Quantaty from '../../elements/Quantaty';
import { useState } from 'react';
 
export default function ProductCart(data:ProductInterface) {
    const { name, sellingPrice, price, imageUrl, quantity } = data
    const [value, setValue] = useState(quantity)
    const remove = () => {return }
    const add = () => {return setValue(value+1)}
    const back = () => {
        if(value > 1){
            return setValue(value-1)}
        }
    return (
        <_Container dplay='flex' pd={1}>
            <_Card>
                <_Img
                    src={imageUrl} 
                    alt={name} />
            </_Card>
            <_Container pd={0.5}>
                <_Heading level={3}>{name}</_Heading>
                <br />
                <_Heading level={3}>
                    <_Span>R$ {sellingPrice}</_Span> - 
                    R$ {price}
                </_Heading>
                <br />
                <Quantaty value={value} add={add} back={back} />
            </_Container>
        </_Container>
    )
}