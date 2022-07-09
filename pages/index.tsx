// Components
import NavBarProduct from "../src/components/layout/Navbar/Product";
import HomeBody from '../src/components/layout/HomeBody/index'

// styleds
import _Box from '../src/styled/box';

// geral
import { useEffect, useState } from "react";
import { BsCart } from 'react-icons/bs';

import { getLocalStorage, setLocalStorage } from '../utils/localstorage'
import { GetDataFirebase } from "./index.ds";
 
export default function Cart () {
    const [carts, setCarts] = useState()
    const [quantCart, setQuantCart] = useState<number>()

    useEffect(() => {
      const getCartQuat = getLocalStorage('cart')
      setQuantCart(getCartQuat ? getCartQuat.length : 0)
    }, [quantCart]);

    useEffect(() => {
      GetDataFirebase(setLocalStorage, getLocalStorage, setCarts)
    }, [])

    return (
      <_Box>
        <NavBarProduct quant={quantCart} url="/cart" Icon={BsCart} text="Cardápio Up" />
        <HomeBody products={carts} quantCart={quantCart} setQuantCart={setQuantCart} />
      </_Box>
    )
}
