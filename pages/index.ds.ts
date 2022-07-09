export function GetDataFirebase(setLocalStorage, getLocalStorage, setCarts){
    fetch(`https://codeby-16da8-default-rtdb.firebaseio.com/product.json`)
    .then(res => res.json())
    .then(data => {
      const newData = data.filter(dt => dt !== null)
      setLocalStorage('product', newData)
      setCarts(getLocalStorage('product'))
    })
    .catch(error => {
      console.log(error)
    })
    return []
  }