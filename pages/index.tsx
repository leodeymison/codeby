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
    const [quantCart, setQuantCart] = useState()

    useEffect(() => {
        fetch(`https://codeby-16da8-default-rtdb.firebaseio.com/product.json`)
        .then(res => res.json())
        .then(data => {
          const newData = data.filter(dt => dt !== null)
          setCarts(newData)
        })
        .catch(error => {
          console.log(error)
        })
        fetch(`https://codeby-16da8-default-rtdb.firebaseio.com/cart.json`)
        .then(res => res.json())
        .then(data => {
            setQuantCart(data.items.length)
        })
        .catch(error => {
          console.log(error)
        })
    }, [])

    return (
      <_Box>
        <NavBarProduct quant={quantCart} url="/cart" Icon={BsCart} text="Cardápio Up" />
        <HomeBody products={carts} />
      </_Box>
    )
}
