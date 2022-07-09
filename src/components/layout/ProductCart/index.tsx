// styleds
import { _Container, _Heading } from '../../../styled/global';
import { _Card, _Img, _Span, _Remove } from './style'

import { FiTrash } from 'react-icons/fi'

// interfaces
import { ProductInterface } from '../../../interfaces/product';
import Quantaty from '../../elements/Quantaty';
import { useState } from 'react';

import { setLocalStorage, getLocalStorage, removeDBStorage } from '../../../../utils/localstorage'
 
export default function ProductCart(data:ProductInterface) {
    var { 
        id, name, sellingPrice, price, imageUrl, 
        quantity, valueTotal, setValueTotal, setCarts
    } = data
    const [value, setValue] = useState(quantity)
    const remove = () => {
        const cartUptoDate = getLocalStorage('cart');
        const productOne = cartUptoDate.filter(cart => cart.id == id);
        const productRemove = cartUptoDate.filter(cart => cart.id !== id);
        setValueTotal(valueTotal - (productOne[0].sellingPrice * productOne[0].quantity))
        setCarts(productRemove || [])
        return removeDBStorage('cart', id)
    }
    const add = () => {
        const cartUptoDate = getLocalStorage('cart');
        const productOne = cartUptoDate.filter(cart => cart.id == id);
        const productAllFilterOne = cartUptoDate.filter(cart => cart.id !== id);
        productOne[0].quantity = value + 1
        const cartUptodateNew = [...productAllFilterOne, ...productOne]
        setValueTotal(valueTotal += productOne[0].sellingPrice)
        setLocalStorage('cart', cartUptodateNew)
        return setValue(value+1)
    }
    const back = () => {
        if(value > 1){
            const cartUptoDate = getLocalStorage('cart');
            const productOne = cartUptoDate.filter(cart => cart.id == id);
            const productAllFilterOne = cartUptoDate.filter(cart => cart.id !== id);
            productOne[0].quantity = value - 1
            const cartUptodateNew = [...productAllFilterOne, ...productOne]
            setValueTotal(valueTotal -= productOne[0].sellingPrice)
            setLocalStorage('cart', cartUptodateNew)
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
                    <_Span>R$ {price}</_Span> - 
                    R$ {sellingPrice}
                </_Heading>
                <br />
                <Quantaty value={value} add={add} back={back} />
            </_Container>
            <_Remove title='Remover produto' onClick={remove}>
                <FiTrash />
            </_Remove>
        </_Container>
    )
}