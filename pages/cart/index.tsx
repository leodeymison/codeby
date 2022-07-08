// Components
import NavBarProduct from "../../src/components/layout/Navbar/Product";
import FinalizeRequest from "../../src/components/layout/FinalizeRequest/index";
import CartBody from '../../src/components/layout/CartBody/index'

// styleds
import _Box from '../../src/styled/box';

// geral
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function Cart () {
    const [carts, setCarts] = useState()
    const [value, setValue] = useState()

    useEffect(() => {
        fetch(`https://codeby-demo.netlify.app/api/cart`)
        .then(res => res.json())
        .then(data => {
            setCarts(data.items)
            // setValue(0)
            setValue(data.value)
        })
        .catch(error => {
          console.log(error)
        })
    }, [])
    return (
        <_Box>
            <NavBarProduct url="/" Icon={AiOutlineArrowLeft} text="Carrinho" />
            <CartBody products={carts} />
            <FinalizeRequest value={value} />
        </_Box>
    )
}
