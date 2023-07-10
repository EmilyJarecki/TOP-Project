import map from '../assets/map.png'
import Image from 'next/image'

const Landing = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col'>
        <p>12,345 positive tests today</p>
        <Image src={map}></Image>
        <button>Positive</button>
        <button>Negative</button>
        <button>Photo</button>
        <p>Submit your Results and enter a lottery!</p>
        <p>Why Your Test Results Matter</p>
        <div>
          <p>Your reports provide valuable information about patterns and trends related to COVID-19 symptoms, disease severity, and treatment outcomes. These insights enable us to refine our understanding of the virus, identify new variants, and adapt our strategies accordingly</p>
        </div>
      </div>
    </div>
  )
}

export default Landing