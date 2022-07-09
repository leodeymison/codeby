export interface ProductInterface {
    id: string,
    name: string,
    price: number,
    sellingPrice: number,
    imageUrl: string,
    quantity?: number,
    add: boolean,
    quantCart?: number,
    setQuantCart?: Function,
    valueTotal?: number,
    setValueTotal?: Function,
    setCarts?: Function
}