import React from "react";
import Link from "next/link";
import Image from "next/image";
import check from "../assets/popUpResults/check.jpg";
import covidImg1 from "../assets/popUpResults/covidImg1.jpg"





function PopUpResults() {
  return (
    <div className="flex justify-center">
    <div className="text-hych-title-blue w-[40%] sm:w-[100%] md:w-[60%] text-center h-max">

      <div >
        <Image src={covidImg1} alt="covid" className="opacity-60" layout="fill" objectFit="cover">
        </Image>
        <div className="opacity-90 bg-white ">
          <div>
              <p className="text-1xl font-semibold flex place-content-center">Your Results Have Been Submitted!</p>
            <div>
              <br />
              <Image src={check} alt="check"></Image>
            </div>
            <br />
              <div>
              <span className="font-bold underline text-blue-500"><Link href="/">Report Another Test</Link></span>
                <p className="text-1xl font-medium flex place-content-center">What Should I Do If I Tested Positive For Covid-19</p>
                <p>You&apos;re part of the future of testing.</p>
                <p>Improve America&apos;s understanding of at-home test use.</p>
                <p>Learn more about the <span className="underline text-blue-500"><Link href="https://learn.makemytestcount.org/#main-content" 
                target="_blank">MakeMyTestCount</Link></span> Vision.</p>
              </div>
              <br />
              <div className="border-t border-gray-300">
                <br />
                <p className="text-1xl font-medium flex place-content-center">Your Information Is Secure.</p>
                <p>All data is managed according to strict federal guidelines.</p>
                <p>Learn more about this site&apos;s <span className="underline text-blue-500">
                  <Link href="https://rkstudio-customer-assets.s3.amazonaws.com/CareEvolution/PrivacyPolicy.html" 
                  target="_blank">privacy protections</Link></span>.</p>
              </div>
              <br />
              <div className="border-t border-gray-300">
                <p className="text-1xl font-medium flex place-content-center">We&apos;re Here To Support You.</p>
                <p>Up-to-date info helps keep you safe and healthy.</p>
                <p>Learn more at <span className="underline text-blue-500"><Link href="https://whentotest.org/" target="_blank">WhenToTest.org</Link></span></p>
              </div>
              <br />
              <div className='flex items-center justify-center'>
                <Link href='/'>
                  <button className="rounded-xl px-12 mb-3 text-white bg-[#30528F]">Close</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default PopUpResults;