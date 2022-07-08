// Components
import ProductHome from "../ProductHome/index";
// styleds
import { _body } from '../../../styled/global';
import { _ContainerLocal } from './style'
// interface
import { ProductInterface } from '../../../interfaces/product';

interface ProductsCart {
    products: Array<ProductInterface>,
}

export default function CartBody(data: ProductsCart) {
    return (
        <_body>
            <_ContainerLocal>
                {
                    data.products?.map((product) => 
                        <ProductHome 
                            id={product.id}
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            sellingPrice={product.sellingPrice}
                            imageUrl={product.imageUrl}
                        />
                    )
                }
            </_ContainerLocal>
        </_body>
    )
}
