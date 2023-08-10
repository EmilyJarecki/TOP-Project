import Frame13 from '../assets/Frame13.png';
import Frame14 from '../assets/Frame14.png';
import Frame15 from '../assets/Frame15.png';
import video from '../assets/videoscreenshot.png';
import Image from 'next/image'

const AdditionalResources = () => {
return (
  <>
    <div className="flex justify-center items-center">
      <div className="flex justify-between flex-wrap">
        {/* <div className="relative"> */}
          <Image
            src={Frame13}
            className="rounded-lg mx-4 my-4 h-32 w-auto"
          ></Image>
        {/* </div> */}
        {/* <div className="relative"> */}
          <Image
            src={Frame14}
            className="rounded-lg mx-4  my-4 h-32 w-auto"
          ></Image>
        {/* </div> */}
        {/* <div className="relative"> */}
          <Image
            src={Frame15}
            className="rounded-lg my-4 mx-4 mb-4 h-32 w-auto"
          ></Image>
        {/* </div> */}
      </div>
    </div>
    <div className="justify-center ml-6">
      <Image
        src={video}
        className="w-80 h-44 mt-6"
      />
    </div>
  </>
)
}
export default AdditionalResources