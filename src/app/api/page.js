import dbConnect from '../lib/dbConnect'

const handler = async (req, res) => {
  try {
    const { method } = req
    switch (method) {
      case 'GET': {
        await dbConnect()
        res.json({ ok: true })
      }
    }
  } catch (error) {
    console.log('GET failed:', error)
  }
}
export default handler
