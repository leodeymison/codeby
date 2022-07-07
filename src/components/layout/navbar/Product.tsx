// styleds
import { _Heading } from '../../../styled/global';
import { _NavbarProduct, _Title } from './style';

// interfaces
import { NarbarProducInterface } from '../../../interfaces/NavBarProductInterface'

export default function NavBarProduct(data:NarbarProducInterface) {
    const { text } = data
    return (
        <_NavbarProduct>
            <_Title>
                <_Heading level={2} textAlign="center">{text}</_Heading>
            </_Title>
        </_NavbarProduct>
    )
}