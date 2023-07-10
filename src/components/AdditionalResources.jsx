import Frame13 from '../assets/Frame13.png';
import Frame14 from '../assets/Frame14.png';
import Frame15 from '../assets/Frame15.png';
import video from '../assets/videoscreenshot.png';
import Image from 'next/image'

const AdditionalResources = () => {
return (
  <div>
  <div className="flex justify-center items-center">
  <div className="flex justify-between flex-wrap">
    <div className="relative">
      <Image
        src={Frame13}
        className="rounded-lg  ml-4 mb-4 w-40 h-28"
      ></Image>
    </div>
    <div className="relative">
      <Image
        src={Frame14}
        className="rounded-lg mr-4  mb-4  w-40 h-28"
      ></Image>
    </div>
    <div className="relative">
      <Image
        src={Frame15}
        className="rounded-lg mt-8 ml-4 mb-4 w-40 h-28"
      ></Image>
    </div>
  </div>
</div>
<div className="justify-center ml-6">
  <Image
    src={video}
    className="w-80 h-44 mt-6"
  />
</div>
</div>
)
}
export default AdditionalResources