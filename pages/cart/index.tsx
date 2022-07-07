// Components
import NavBarProduct from "../../src/components/layout/navbar/Product";
import FinalizeRequest from "../../src/components/layout/FinalizeRequest/index";
import CartBody from '../../src/components/layout/CartBody/index'

// styleds

import _Cart from '../../src/styled/pages/Cart';

export default function Cart () {
    return (
        <_Cart>
            <NavBarProduct text="Carrinho" />
            <CartBody />
            <FinalizeRequest />
        </_Cart>
    )
}
