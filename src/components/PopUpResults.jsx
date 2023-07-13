"use client"
import React from "react";
import Link from "next/link";
import { useState } from "react";


function PopUpResults() {
  // const [showPopUpResults, setShowPopUpResults] = useState(false);


  return (
    <div className="text-hych-title-blue container mx-auto text-center">
        <p className="text-1xl font-medium flex place-content-center">Your Results Have Been Submitted!</p>
      <div>
        <br />
        <p>image</p>
      </div>
      <br />
        <div>
          <p className="text-1xl font-medium flex place-content-center">What Should I Do If I Tested Positive For Covid-19</p>
          <p>You&apos;re part of the future of testing.</p>
          <p>Improve America&apos;s understanding of at-home test use.</p>
          <p>Learn more about the <span className="underline text-blue-500"><Link href="https://learn.makemytestcount.org/#main-content" 
          target="_blank">MakeMyTestCount</Link></span> Vision.</p>
        </div>
        <br />
        <div>
          <p className="text-1xl font-medium flex place-content-center">Your Information Is Secure.</p>
          <p>All data is managed according to strict federal guidelines.</p>
          <p>Learn more about this site&apos;s <span className="underline text-blue-500">
            <Link href="https://rkstudio-customer-assets.s3.amazonaws.com/CareEvolution/PrivacyPolicy.html" 
            target="_blank">privacy protections</Link></span>.</p>
        </div>
        <br />
        <div>
          <p className="text-1xl font-medium flex place-content-center">We&apos;re Here To Support You.</p>
          <p>Up-to-date info helps keep you safe and healthy.</p>
          <p>Learn more at <span className="underline text-blue-500"><Link href="https://whentotest.org/" target="_blank">WhenToTest.org</Link></span></p>
        </div>
    </div>
  )
}

export default PopUpResults;