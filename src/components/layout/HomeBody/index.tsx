// Components
import ProductHome from "../ProductHome/index";
// styleds
import { _body } from '../../../styled/global';
import { _ContainerLocal } from './style'

// Interfaces
import { ProductsCartBody } from '../../../interfaces/ProductsCart';

export default function CartBody(data: ProductsCartBody) {
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
                            add={product.add}
                            quantCart={data.quantCart}
                            setQuantCart={data.setQuantCart}
                            quantity={product.quantity}
                        />
                    )
                }
            </_ContainerLocal>
        </_body>
    )
}
