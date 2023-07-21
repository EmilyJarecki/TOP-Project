import dbConnect from '../../lib/dbConnect'
import Info from '../../models/info'

const infoController = {
  getInfo: async (req, res) => {
    await dbConnect()
    try {
      const info = await Info.find({})
      res.status(200).json(info)
    } catch (error) {
      console.log('Error fetching info:', error)
      res.status(500).json({ error: 'Failed to fetch posts' })
    }
  },
  createInfo: async (req, res) => {
    const {
      Date,
      Age,
      Sex,
      Race,
      Ethnicity,
      Zipcode,
      DOB,
      Address,
      PhoneNumber,
      MedicalHistory
    } = req.body
    await dbConnect()
    try {
      const newForm = await Info.create({
        Date,
        Age,
        Sex,
        Race,
        Ethnicity,
        Zipcode,
        DOB,
        Address,
        PhoneNumber,
        MedicalHistory
      })
      res.status(200).json(newForm)
    } catch (error) {
      console.log('Error creating info:', error)
      res.status(500).json({ error: 'Failed to create info' })
    }
  },
  getFormById: async (req, res) => {
    const infoId = req.params.id
    await dbConnect()
    try {
      const info = await Info.findById(infoId)
      if (!info) {
        return res.status(404).json({ error: 'Info not found' })
      }
      res.status(200).json(info)
    } catch (error) {
      console.error('Error fetching info:', error)
      res.status(500).json({ error: 'Failed to fetch info' })
    }
  },
  updateInfo: async (req, res) => {
    const infoId = req.params.id
    const {
      Date,
      Age,
      Sex,
      Race,
      Ethnicity,
      Zipcode,
      DOB,
      Address,
      PhoneNumber,
      MedicalHistory
    } = req.body
    await dbConnect()
    try {
      const updatedInfo = await Info.findByIdAndUpdate(
        infoId,
        {
          Date,
          Age,
          Sex,
          Race,
          Ethnicity,
          Zipcode,
          DOB,
          Address,
          PhoneNumber,
          MedicalHistory
        },
        { new: true }
      )
      if (!updatedInfo) {
        return res.status(404).json({ error: 'Info not found' })
      }
      res.status(200).json(updatedInfo)
    } catch (error) {
      console.error('Error updating info:', error)
      res.status(500).json({ error: 'Failed to update info' })
    }
  },
  deleteInfo: async (req, res) => {
    const infoId = req.params.id
    await dbConnect()
    try {
      const deletedinfo = await Info.findByIdAndDelete(infoId)
      if (!deletedinfo) {
        return res.status(404).json({ error: 'Info not found' })
      }
      res.status(200).json({ message: 'Info deleted successfully' })
    } catch (error) {
      console.error('Error deleting info:', error)
      res.status(500).json({ error: 'Failed to delete info' })
    }
  }
}
