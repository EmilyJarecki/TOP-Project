import clientPromise from '../../../lib/dbConnect'

export default async (req, res) => {
  try {
    const client = await clientPromise
    const InfoModel = client.model('Info')
    const info = await InfoModel.find({}).limit(20).exec()

    return info
  } catch (e) {
    console.error(e)
    throw new Error(e).message
  }
}
