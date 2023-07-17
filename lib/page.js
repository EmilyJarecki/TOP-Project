const mongoose = require('mongoose')

const uri = process.env.MONGODB_URI
const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(uri)
    console.log(connect)
    return connect
  } catch (error) {
    console.log('db connection failed:', error)
  }
}
module.exports = dbConnect
