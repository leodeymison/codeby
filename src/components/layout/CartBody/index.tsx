// Components
import ProductCart from "../productCart/index";
// styleds
import { _body } from './style';
// interface
import { ProductInterface } from '../../../interfaces/product';

interface ProductsCart {
    products: Array<ProductInterface>
}

export default function CartBody(data: ProductsCart) {
    return (
        <_body>
            {
                data.products?.map((product) => 
                    <ProductCart 
                        id={product.id}
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        sellingPrice={product.sellingPrice}
                        imageUrl={product.imageUrl} 
                        quantity={product.quantity}
                    />
                )
            }
        </_body>
    )
}
