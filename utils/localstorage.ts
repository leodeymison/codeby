export function getLocalStorage(db: string) {
    return JSON.parse(localStorage.getItem(db));
}
export function setLocalStorage(db: string, body: any) {
    return localStorage.setItem(db, JSON.stringify(body));
}

export function addDBStorageStart(nameDB:string){
    return setLocalStorage(nameDB, [])
}

export function addDBStorage(data:Object, nameDB:string) {
    const cartAtual = getLocalStorage(nameDB)
    cartAtual.push(data)
    return setLocalStorage(nameDB, cartAtual)
}

export function removeDBStorage(nameDB:string, id:string) {
    var cartAtual = getLocalStorage(nameDB)
    const cartRemove = cartAtual.filter(cart => cart.id !== id)
    return setLocalStorage(nameDB, cartRemove)
}