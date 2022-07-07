import { _Container, _Heading } from '../../../styled/global';
import { _Card, _Img } from './style'

// interfaces
import { ProductInterface } from '../../../interfaces/product';
 
export default function ProductCart(data:ProductInterface) {
    const { name, sellingPrice, price, imageUrl } = data
    return (
        <_Container dplay='flex' pd={1}>
            <_Card>
                <_Img
                    src={imageUrl} 
                    alt={name} />
            </_Card>
            <_Container pd={0.3}>
                <_Heading level={3}>{name}</_Heading>
                <span>R$ {sellingPrice}</span>
                <p>R$ {price}</p>
            </_Container>
        </_Container>
    )
}