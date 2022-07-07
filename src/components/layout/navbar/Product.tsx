// styleds
import { _Heading } from '../../../styled/global';
import { _NavbarProduct, _Title } from './style';

export default function NavBarProduct() {
    return (
        <_NavbarProduct>
            <_Title>
                <_Heading level={2} textAlign="center">Carrinho</_Heading>
            </_Title>
        </_NavbarProduct>
    )
}