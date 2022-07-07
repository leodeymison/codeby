import db from '../../db.json'

export default async function handler(req:any, res:any) {
  try {
    const { method, body } = req

    switch (method) {
      case 'GET':
        const responseGetAll = db.cart
        res.status(200).json(responseGetAll)
        break;
      default: 

    } 
  } catch (err) {
    console.log(err)
  }
}
