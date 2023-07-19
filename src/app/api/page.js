import dbConnect from '../../../lib/dbConnect'

const handler = async (req, res) => {
  const { method } = req
  switch (method) {
    case 'GET': {
      await dbConnect()
      res.json({ ok: true })
    }
  }
}
export default handler
