import React from "react";
import Link from "next/link";
import Container from "postcss/lib/container";

function SiteInfo() {
  return (
    <div className="box-border h-70 w-50 p-10">
      <div className="container mx-auto px-40">
        <p className="text-5xl font-medium flex place-content-center text-hych-title-blue">About Us</p>
        <br />
        <p className="text-sm flex text-hych-subheading-blue">Before the pandemic, medical tests were nearly always done at health care 
          facilities, by trained staff members.These staffers had to report test 
          results for diseases like COVID-19 to public health officials — it was part of their jobs.
        <br />
        <br />
        Today, most COVID tests are done by people in their own homes. As at-home tests became 
        more and more popular, America needed a way for people to be able to report their results.</p>
        <br />
        <div>
          <p className="text-2xl text-hych-title-blue">NIH's RADx® MARS lets you contribute to America's public health</p>
          <br />
          <p className="text-sm text-hych-subheading-blue">That's what the <span className="underline text-blue-500"><Link href="https://www.nibib.nih.gov/covid-19/radx-tech-program/mars#learnmore" 
              target="_blank">NIH RADx® MARS</Link></span>
              program has made. The MARS team built a system that puts 
              at-home test results into a standard format used by health care professionals. That 
              information then flows into secure databases that researchers and public health teams 
              already know how to use. MakeMyTestCount.org is the front end of that system, allowing us 
              to safely and securely report our at-home results, including as much personal information 
              as we feel comfortable sharing.</p>
              <br />
              <div>
                <p className="text-2xl text-hych-title-blue">You're part of the future of at-home testing in the US</p>
                <br />
                <p className="text-sm text-hych-subheading-blue">COVID-19 was the first infectious disease for which the U.S. had over-the-counter 
                  at-home tests. But at-home tests for other diseases like influenza and respiratory 
                  syncytial virus (RSV) are already appearing. When you report your results on MakeMyTestCount, 
                  you help America get ready for the future of at-home testing. And you help your country be 
                  better prepared to keep all its citizens safer from infectious disease.</p>
              </div>
        </div>
      </div>
    </div>
  )
}

export default SiteInfo;