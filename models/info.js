// Date of test, Age, Sex, Race, Ethnicity, Zip Code, DOB, Address, Phone, Medical History
import mongoose from 'mongoose'

const InfoSchema = new mongoose.Schema(
  {
    Date: {
      type: String,
      required: true,
      trim: true
    },
    Age: {
      type: Number,
      required: true
    },
    Sex: {
      type: String,
      required: true
    },
    Race: {
      type: String,
      required: true
    },
    Ethnicity: {
      type: String,
      required: true
    },
    Zipcode: {
      type: Number,
      required: true
    },
    DOB: {
      type: String,
      required: true
    },
    Address: {
      type: String,
      required: false
    },
    PhoneNumber: {
      type: Number,
      required: false
    },
    MedicalHistory: {
      type: String,
      required: false
    },
    Slug: {
      type: String,
      required: true,
      trim: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
)
const Info = mongoose.model('Info', InfoSchema)
export default Info
