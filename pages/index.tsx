// Components
import NavBarProduct from "../src/components/layout/Navbar/Product";
import HomeBody from '../src/components/layout/HomeBody/index'

// styleds
import _Box from '../src/styled/box';

// geral
import { useEffect, useState } from "react";
import { BsCart } from 'react-icons/bs';

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
        <NavBarProduct url="/cart" Icon={BsCart} text="Cardápio Up" />
        <HomeBody products={carts} />
      </_Box>
    )
}
