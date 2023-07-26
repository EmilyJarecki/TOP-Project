import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
import None from "../assets/symptoms/none.png"

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
    name: "Loss of Smell",
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
  {
    name: "No Symptoms",
    image: None,
  },
]
function PickSymptoms() {
  return (
    <>
    <div className='flex flex-col items-center justify-center text-[#30528F]'>
      <p className='font-semibold'>Page 1 of 2</p>
      <p className='font-medium'>What are your symptoms?</p>
    </div>


    <div className='grid grid-cols-3 m-4 shadow-slate-900'>
        {symptomsData.map((item) => (
          <button key={item.id} className="w-24 bg-white mx-2 rounded-lg place-content-center">
            <div className="grid justify-center items-center">
              <Image
                className="w-24"
                src={item.image}
                alt={item.name} icon
              />
              <p className="text-sm">{item.name}</p>
            </div>
          </button>
        ))}
    </div>



    <div className='flex items-center justify-center'>
      <Link href='/symptoms2'>
        <button className='rounded-xl mx-3 px-12 text-black bg-white'>Skip</button>
      </Link>
      <Link href='/symptoms2'>
        <button className="rounded-xl mx-3 px-12 text-white bg-[#30528F]">Continue</button>
      </Link>
    </div>
    </>
  )
}

export default PickSymptoms