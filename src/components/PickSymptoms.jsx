import React from 'react'
import symptomsImages from "../assets/symptoms/images"

const symptomsData = [
  {
    name: "Cough",
    image: symptomsImages.cough,
  },
  {
    name: "Fever",
    image: symptomsImages.fever,
  },
  {
    name: "Trouble Breathing",
    image: symptomsImages.breathing,
  },
  {
    name: "Headache",
    image: symptomsImages.headache,
  },
  {
    name: "Muscle Ache",
    image: symptomsImages.muscle,
  },
  {
    name: "Lost of Smell",
    image: symptomsImages.nose,
  },
  {
    name: "Chills",
    image: symptomsImages.chills,
  },
  {
    name: "Excessive Fatigue",
    image: symptomsImages.fatigue,
  },
  {
    name: "Nausea/Vomiting",
    image: symptomsImages.nausea,
  },
  {
    name: "Diarrhea",
    image: symptomsImages.diarrhea,
  },
  {
    name: "Abdominal Pain",
    image: symptomsImages.abdominal,
  },
  {
    name: "Skin Rash",
    image: symptomsImages.rash,
  },
]

function PickSymptoms() {
  return (
    <>
    <div>
      <p>Page 1 of 2</p>
    </div>
    <div>
      <p>What are your symptoms?</p>
    </div>
    </>
  )
}

export default PickSymptoms