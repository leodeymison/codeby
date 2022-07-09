import { _Heading } from '../../../styled/global';
import { _Card, _Img, _Span } from './style'

// interfaces
import { ProductInterface } from '../../../interfaces/product';

import ButtonFunc from '../../elements/ButtonFunc';
import { useState } from 'react';

import { addDBStorage, getLocalStorage, removeDBStorage, setLocalStorage } from '../../../../utils/localstorage'

export default function ProductCart(data:ProductInterface) {
    var { id, name, sellingPrice, price, imageUrl, add, quantCart, setQuantCart, quantity } = data;
    const [clickBtn, setClickBtn] = useState(add);

    function updateAddProduct(alt){
        const productUptoDate = getLocalStorage('product');
        const productOne = productUptoDate.filter(product => product.id == id);
        const productAllFilterOne = productUptoDate.filter(product => product.id !== id);
        productOne[0].add = alt
        const productUptodateNew = [...productAllFilterOne, ...productOne]
        setLocalStorage('product', productUptodateNew)
    }
    function addCart() {
        updateAddProduct(true)

        const data = {
            id, name, sellingPrice, price, imageUrl, quantity
        }
        addDBStorage(data, 'cart')
        setQuantCart(quantCart += 1)
        return setClickBtn(true)
    }
    function removeCart() {
        updateAddProduct(false)
        removeDBStorage('cart', id)
        setQuantCart(quantCart -= 1)
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