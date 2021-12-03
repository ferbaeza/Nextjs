import {dbConnect} from './dbConnect'

dbConnect()

var mongoose = require('mongoose');
console.log(mongoose.connection.readyState);

export default function handler(req, res) {
    res.status(200).json('Mongoose Ok' );
  }