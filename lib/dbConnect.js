import mongoose from 'mongoose'
const uri = process.env.MONGODB_URI

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(uri)
    console.log('successfully connected')
    return connect
  } catch (error) {
    console.log('db connection fail:', error)
  }
}

export default dbConnect
