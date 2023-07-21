import {
  getInfo,
  createInfo,
  updateInfo,
  deleteInfo
} from '../../../controllers/infoController'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return getInfo(req, res)
  } else if (req.method === 'POST') {
    return createInfo(req, res)
  } else if (req.method === 'PUT') {
    return updateInfo(req, res)
  } else if (req.method === 'DELETE') {
    return deleteInfo(req, res)
  } else {
    console.log('Method Not Allowed')
  }
}
