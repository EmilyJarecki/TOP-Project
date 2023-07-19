import dbConnect from '../lib/page'

const handler = async (req, res) => {
  const { method } = req
  switch (method) {
    case 'GET': {
      await dbConnect()
      res.json({ ok: true })
      break
    }
  }
}
module.exports = handler
