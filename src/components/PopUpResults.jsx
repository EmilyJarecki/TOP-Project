import React from "react";
import Link from "next/link";

function PopUpResults() {
  return (
    <div className="hidden">
      <p>Your Results Have Been Submitted!</p>
      <div>
        <p>image</p>
      </div>
        <div>
          <p>What Should I Do If I Tested Positive For Covid-19</p>
          <p>You're part of the future of testing.</p>
          <p>Improve America's understanding of at-home test use.</p>
          <p>Learn more about the <Link href="https://learn.makemytestcount.org/#main-content" 
          target="_blank">MakeMyTestCount</Link> Vision.</p>
        </div>
        <div>
          <p>Your Information Is Secure.</p>
          <p>All data is managed according to strict federal guidelines.</p>
          <p>Learn more about this site's 
            <Link href="https://rkstudio-customer-assets.s3.amazonaws.com/CareEvolution/PrivacyPolicy.html" 
            target="_blank">privacy protections</Link>.</p>
        </div>
        <div>
          <p>We're Here To Support You.</p>
          <p>Up-to-date info helps keep you safe and healthy.</p>
          <p>Learn more at <Link href="https://whentotest.org/" target="_blank">WhenToTest.org</Link></p>
        </div>
    </div>
  )
}

export default PopUpResults;