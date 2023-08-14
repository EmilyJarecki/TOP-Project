"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Formik, Field, Form } from 'formik';
import { useRouter } from 'next/navigation';

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
    id: "cough"
  },
  {
    name: "Fever",
    image: Fever,
    id: "fever"
  },
  {
    name: "Trouble Breathing",
    image: Breathing,
    id: "breathing"
  },
  {
    name: "Headache",
    image: Headache,
    id: "headache"
  },
  {
    name: "Muscle Ache",
    image: Muscle,
    id: "muscleAche"
  },
  {
    name: "Loss of Smell",
    image: Nose,
    id: "lossOfSmell"
  },
  {
    name: "Chills",
    image: Chills,
    id: "chills"
  },
  {
    name: "Excessive Fatigue",
    image: Fatigue,
    id: "excessiveFatigue"
  },
  {
    name: "Nausea/Vomiting",
    image: Nausea,
    id: "nauseaVomiting"
  },
  {
    name: "Diarrhea",
    image: Diarrhea,
    id: "diarrhea"
  },
  {
    name: "Abdominal Pain",
    image: Abdominal,
    id: "abdominalPain"
  },
  {
    name: "Skin Rash",
    image: Rash,
    id: "skinRash"
  },
  {
    name: "Conjunctivitis",
    image: Conjunctivitis,
    id: "conjunctivitis"
  },
  {
    name: "Other",
    image: Other,
    id: "other"
  },
  {
    name: "None",
    image: None,
    id: "noSymptoms"
  },
]

const Page1 = () => {
  const router = useRouter();
  const [clickedButtons, setClickedButtons] = useState([]);

  // const handleSubmit = (values) => {
  //   localStorage.setItem('formValues', JSON.stringify(values));
  // };

  const handleButtonClick = ( field, setFieldValue, values) => () => {
    setFieldValue(field, !values[field]);
    setClickedButtons(prevClickedButtons => {
      if (prevClickedButtons.includes(field)) {
        return prevClickedButtons.filter(button => button !== field);
      } else {
        return [...prevClickedButtons, field];
      }
    });
    console.log(values)
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center text-[#30528F]'>
        <p className='font-semibold'>Page 1 of 2</p>
        <p className='font-medium'>What are your symptoms?</p>
      </div>
        <Formik initialValues={{}}>
          {({ values, setFieldValue }) => (
            <Form>
              <div className='grid grid-cols-3 m-4 shadow-slate-900 place-items-center max-w-[550px] mx-auto'>
                {symptomsData.map((item) => (
                  <button className={`w-24 m-1 h-24 relative rounded-lg flex justify-center ${
                    clickedButtons.includes(item.id) ? 'bg-[#8eaadd]' : 'bg-white hover:bg-[#8eaadd]'
                  }`}
                    key={item.id} 
                    type="button"
                    onClick={handleButtonClick(item.id, setFieldValue, values)}
                  >
                  <div className="grid justify-center items-center">
                    <Image
                      className="w-24"
                      src={item.image}
                      alt={item.name}
                    />
                    <p className="text-sm z-10 absolute bottom-0 text-center w-24 bg-white-500 opacity-80"><span className="">{item.name}</span></p>
                  </div>
                  </button>
                ))}
              </div>
              <div className='flex items-center justify-center'>
                <Link href='/symptoms2'>
                  <button className='rounded-xl mx-3 px-12 text-black bg-white'>Skip</button>
                </Link>
                <Link href='/symptoms2'>
                  <button className="rounded-xl mx-3 px-12 text-white bg-[#30528F]" type="submit">Continue</button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
    </>
  );
};
  
  export default Page1;