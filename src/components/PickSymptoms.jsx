import React from 'react'

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
    <div>
      <p>What are your symptoms??????</p>
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