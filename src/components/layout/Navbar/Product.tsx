// styleds
import { _Heading } from '../../../styled/global';
import { _NavbarProduct, _Title, _IconBox } from './style';

// interfaces
import { NarbarProducInterface } from '../../../interfaces/NavBarProductInterface'
import Link from '../../../../node_modules/next/link';

export default function NavBarProduct(data:NarbarProducInterface) {
    const { text, Icon, url } = data
    return (
        <_NavbarProduct>
            <_IconBox>
                <Link href={url}>
                    <Icon />
                </Link>
            </_IconBox>
            
            <_Title>
                <_Heading level={2} textAlign="center">{text}</_Heading>
            </_Title>
        </_NavbarProduct>
    )
}