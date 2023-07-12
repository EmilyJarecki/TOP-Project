import React from 'react'
import Image from 'next/image'

import Abdominal from "../assets/symptoms/abdominal.png"
import Breathing from "../assets/symptoms/breathing.png"
import Chills from "../assets/symptoms/chills.png"
import Cough from "../assets/symptoms/cough.png"
import Diarrhea from "../assets/symptoms/diarrhea.png"
import Fatigue from "../assets/symptoms/fatigue.png"
import Fever from "../assets/symptoms/fever.png"
import Headache from "../assets/symptoms/headache-art.png"
import Muscle from "../assets/symptoms/muscle.png"
import Nausea from "../assets/symptoms/nausea.png"
import Nose from "../assets/symptoms/nose.png"
import Rash from "../assets/symptoms/rash.png"
import Conjunctivitis from "../assets/symptoms/conjunctivitis.png"
import Other from "../assets/symptoms/other.png"

const symptomsData = [
  {
    name: "Cough",
    image: Cough,
  },
  {
    name: "Fever",
    image: Fever,
  },
  {
    name: "Trouble Breathing",
    image: Breathing,
  },
  {
    name: "Headache",
    image: Headache,
  },
  {
    name: "Muscle Ache",
    image: Muscle,
  },
  {
    name: "Lost of Smell",
    image: Nose,
  },
  {
    name: "Chills",
    image: Chills,
  },
  {
    name: "Excessive Fatigue",
    image: Fatigue,
  },
  {
    name: "Nausea/Vomiting",
    image: Nausea,
  },
  {
    name: "Diarrhea",
    image: Diarrhea,
  },
  {
    name: "Abdominal Pain",
    image: Abdominal,
  },
  {
    name: "Skin Rash",
    image: Rash,
  },
  {
    name: "Conjunctivitis",
    image: Conjunctivitis,
  },
  {
    name: "Other",
    image: Other,
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
    <div className='grid grid-cols-3'>
        {symptomsData.map((item) => (
          <button>
            <div grid grid-cols-2 gap-4 justify-center items-center>
              <Image
                className="w-20 rounded-xl bg-white"
                src={item.image}
                alt={item.name} icon
              />
              <p>{item.name}</p>
            </div>
          </button>
        ))}
    </div>
    <div className='flex items-center justify-center'>
      <button className='rounded-xl mx-3 px-12 text-black bg-white'>Skip</button>
      <button className="rounded-xl mx-3 px-12 text-white bg-[#30528F]">Continue</button>
    </div>
    </>
  )
}

export default PickSymptoms