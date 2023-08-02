import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Formik, Field, Form } from 'formik';
import { useRouter } from 'next/router';

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

const Page1 = () => {
  const router = useRouter();

  const handleSubmit = (values) => {
    // Map the boolean values to "yes" for backend
    const dataToSend = Object.keys(values).reduce((acc, key) => {
      acc[key] = values[key] ? 'yes' : 'no';
      return acc;
    }, {});

    // Storing the form values in session storage to persist the values across pages)
    sessionStorage.setItem('formValues', JSON.stringify(values));

    // Navigate to the next page
    router.push('/page2');
  };

  const initialFormValues = {
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
    button6: false,
    button7: false,
    button8: false,
    button9: false,
    button10: false,
    button11: false,
    button12: false,
    button13: false,
  };


};



// function PickSymptoms() {
//   return (
//     <>
//     <div className='flex flex-col items-center justify-center text-[#30528F]'>
//       <p className='font-semibold'>Page 1 of 2</p>
//       <p className='font-medium'>What are your symptoms?</p>
//     </div>


//     <div className='grid grid-cols-3 m-4 shadow-slate-900'>
//         {symptomsData.map((item) => (
//           <button key={item.id} className="w-24 bg-white m-1 h-24 hover:bg-[#8eaadd] relative rounded-lg flex justify-center">
//             <div className="grid justify-center items-center">
//               <Image
//                 className="w-24"
//                 src={item.image}
//                 alt={item.name} icon
//               />
//               <p className="text-sm z-10 absolute bottom-0 text-center w-24 bg-white-500 opacity-80"><span className="">{item.name}</span></p>
//             </div>
//           </button>
//         ))}
//     </div>



//     <div className='flex items-center justify-center'>
//       <Link href='/symptoms2'>
//         <button className='rounded-xl mx-3 px-12 text-black bg-white'>Skip</button>
//       </Link>
//       <Link href='/symptoms2'>
//         <button className="rounded-xl mx-3 px-12 text-white bg-[#30528F]">Continue</button>
//       </Link>
//     </div>
//     </>
//   )
// }

export default Page1