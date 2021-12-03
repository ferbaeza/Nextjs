import {dbConnect} from './dbConnect'

dbConnect()

export default function handler(req, res) {
    res.status(200).json('Mongoose Ok' )
  }