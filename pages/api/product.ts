import db from '../../db.json'

export default async function handler(req:any, res:any) {
  try {
    const { method, body } = req

    switch (method) {
      case 'GET':
        const responseGetAll = db.products
        res.status(200).json(responseGetAll)
        break;
      case 'POST':
        const responseCreateOne = db.products.push(
          JSON.parse(body)
        )
        res.status(200).json(responseCreateOne)
        break;
      default: 

    } 
  } catch (err) {
    console.log(err)
  }
}
