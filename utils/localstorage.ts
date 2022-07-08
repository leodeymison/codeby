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