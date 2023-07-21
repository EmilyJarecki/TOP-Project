import dbConnect from '../../../lib/dbConnect'

export default async (req, res) => {
  try {
    await dbConnect()
    console.log('it worked')
  } catch (error) {
    console.log('Database Connection Failed:', error)
  }
}
