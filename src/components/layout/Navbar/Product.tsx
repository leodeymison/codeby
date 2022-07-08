// styleds
import { _Heading } from '../../../styled/global';
import { _NavbarProduct, _Title, _IconBox } from './style';

// interfaces
import { NarbarProducInterface } from '../../../interfaces/NavBarProductInterface'

// Geral
import Link from '../../../../node_modules/next/link';

// Components 
import QuantCart from '../../elements/QuantCart';

export default function NavBarProduct(data:NarbarProducInterface) {
    const { text, Icon, url, quant } = data
    return (
        <_NavbarProduct>
            {
                Icon && <_IconBox>
                    <Link href={url}>
                        <Icon />
                    </Link>
                    {
                        !!quant && <QuantCart value={quant} />
                    }
                </_IconBox>
            }
            
            <_Title>
                <_Heading level={2} textAlign="center">{text}</_Heading>
            </_Title>
        </_NavbarProduct>
    )
}