import mongoose from 'mongoose'

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongooseClientPromise) {
    clientPromise = mongoose.connect(uri, options).then((connection) => {
      console.log('Connected to MongoDB in development mode')
      return connection
    })
    global._mongooseClientPromise = clientPromise
  } else {
    clientPromise = global._mongooseClientPromise
  }
} else {
  clientPromise = mongoose.connect(uri, options).then((connection) => {
    console.log('Connected to MongoDB in production mode')
    return connection
  })
}

module.exports = clientPromise
