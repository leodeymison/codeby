// Components
import NavBarProduct from "../../src/components/layout/Navbar/Product";
import FinalizeRequest from "../../src/components/layout/FinalizeRequest/index";
import CartBody from '../../src/components/layout/CartBody/index'

// styleds
import _Box from '../../src/styled/box';

// geral
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from 'react-icons/ai';

// LocalStorage
import { getLocalStorage } from '../../utils/localstorage'

export default function Cart () {
    const [carts, setCarts] = useState()
    const [value, setValue] = useState(0)

    useEffect(() => {
        const cartList = getLocalStorage('cart') || []
        if(cartList.length > 0){
            setCarts(cartList)
            var cartValueTotal = 0;
            cartList.forEach(element => {
                cartValueTotal += element.sellingPrice * element.quantity
            });
            setValue(cartValueTotal)
        }
    }, [])
    return (
        <_Box>
            <NavBarProduct url="/" Icon={AiOutlineArrowLeft} text="Carrinho" />
            <CartBody products={carts} setCarts={setCarts} valueTotal={value} setValueTotal={setValue} />
            <FinalizeRequest value={value} />
        </_Box>
    )
}
