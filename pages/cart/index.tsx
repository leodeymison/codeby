// Components
import NavBarProduct from "../../src/components/layout/navbar/Product";
import ProductCart from "../../src/components/productCart/index";
import FinalizeRequest from "../../src/components/FinalizeRequest/index";

// styleds
import { _Cart, _body } from './style';

export default function Cart () {
    return (
        <_Cart>
            <NavBarProduct />
            <_body>
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
            </_body>
            <FinalizeRequest />
        </_Cart>
    )
}
