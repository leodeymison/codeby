// Components
import NavBarProduct from "../../src/components/layout/navbar/Product";
import FinalizeRequest from "../../src/components/layout/FinalizeRequest/index";
import CartBody from '../../src/components/layout/CartBody/index'

// styleds
import _Cart from '../../src/styled/pages/Cart';

// geral
import { useEffect, useState } from "react";

export default function Cart () {
    const [carts, setCarts] = useState()
    useEffect(() => {
        fetch("http://localhost:3000/api/cart")
        .then(res => res.json())
        .then(data => {
            setCarts(data.items)
        })
        .catch(error => {
          console.log(error)
        })
    }, [])
    return (
        <_Cart>
            <NavBarProduct text="Carrinho" />
            <CartBody products={carts} />
            <FinalizeRequest />
        </_Cart>
    )
}
