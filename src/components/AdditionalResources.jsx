import Frame13 from '../assets/Frame13.png';
import Frame14 from '../assets/Frame14.png';
import Frame15 from '../assets/Frame15.png';
import video from '../assets/videoscreenshot.png';
import Image from 'next/image';
import Link from 'next/link';
import holdingHands from '../assets/addtl-rsrc-holding-hands.png';
import codeScreen from "../assets/addtl-rsrc-code.png";
import covidTest from "../assets/addtl-rsrc-testing.png";
import virus from "../assets/addtl-rscr-virus.png"

const AdditionalResources = () => {
  return (
    // <>
    //   <div className="flex justify-center items-center">
    //     <div className="flex justify-between flex-wrap">
    //       {/* <div className="relative"> */}
    //         <Image
    //           src={Frame13}
    //           className="rounded-lg mx-4 my-4 h-32 w-auto"
    //         ></Image>
    //       {/* </div> */}
    //       {/* <div className="relative"> */}
    //         <Image
    //           src={Frame14}
    //           className="rounded-lg mx-4  my-4 h-32 w-auto"
    //         ></Image>
    //       {/* </div> */}
    //       {/* <div className="relative"> */}
    //         <Image
    //           src={Frame15}
    //           className="rounded-lg my-4 mx-4 mb-4 h-32 w-auto"
    //         ></Image>
    //       {/* </div> */}
    //     </div>
    //   </div>
    //   <div className="justify-center ml-6">
    //     <Image
    //       src={video}
    //       className="w-80 h-44 mt-6"
    //     />
    //   </div>
    // </>
    <div className="flex flex-wrap w-full px-4 justify-between gap-y-6">
      <Link href="/faq">
        <div className="rounded-xl overflow-hidden w-40 shadow-md shadow-[#D9D9D9]">
          <Image src={holdingHands} alt="holding-hands-image" className="w-full"></Image>
          <p className="text-md font-semibold leading-none p-2 bg-[#F5F5F5]">We&apos;re here to support you</p>
        </div>
      </Link>
      <Link href="/privacy">
        <div className="rounded-xl overflow-hidden w-40 shadow-md shadow-[#D9D9D9]">
          <Image src={codeScreen} alt="holding-hands-image" className="w-full"></Image>
          <p className="text-md font-semibold leading-none p-2 bg-[#F5F5F5]">Your information is secure</p>
        </div>
      </Link>
      <Link href="/about">
        <div className="rounded-xl overflow-hidden w-40 shadow-md shadow-[#D9D9D9]">
          <Image src={covidTest} alt="holding-hands-image" className="w-full"></Image>
          <p className="text-md font-semibold leading-none p-2 bg-[#F5F5F5]">You're part of the future of testing</p>
        </div>
      </Link>
      <iframe className="w-full h-60" src="https://www.youtube.com/embed/yoZL1BVP9Bs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}
export default AdditionalResources