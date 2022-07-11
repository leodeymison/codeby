import { ProductInterface } from './product';

export interface ProductsCart {
    products: Array<ProductInterface>,
    valueTotal: number,
    setValueTotal: Function,
    setCarts: Function
}

export interface ProductsCartBody {
    products: Array<ProductInterface>,
    setQuantCart: Function,
    quantCart: number
}