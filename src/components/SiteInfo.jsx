import React from "react";
import Link from "next/link";

function SiteInfo() {
  return (
    <div>
      <p>About Us</p>
      <p>Before the pandemic, medical tests were nearly always done at health care 
        facilities, by trained staff members.These staffers had to report test 
        results for diseases like COVID-19 to public health officials — it was part of their jobs.
      <br/>Today, most COVID tests are done by people in their own homes. As at-home tests became 
      more and more popular, America needed a way for people to be able to report their results.</p>
      <div>
        <p>NIH's RADx® MARS lets you contribute to America's public health</p>
        <p>That's what the <Link href="https://www.nibib.nih.gov/covid-19/radx-tech-program/mars#learnmore" 
            target="_blank">NIH RADx® MARS</Link> 
            program has made. The MARS team built a system that puts 
            at-home test results into a standard format used by health care professionals. That 
            information then flows into secure databases that researchers and public health teams 
            already know how to use. MakeMyTestCount.org is the front end of that system, allowing us 
            to safely and securely report our at-home results, including as much personal information 
            as we feel comfortable sharing.</p>
            <div>
              <p>You're part of the future of at-home testing in the US</p>
              <p>COVID-19 was the first infectious disease for which the U.S. had over-the-counter 
                at-home tests. But at-home tests for other diseases like influenza and respiratory 
                syncytial virus (RSV) are already appearing. When you report your results on MakeMyTestCount, 
                you help America get ready for the future of at-home testing. And you help your country be 
                better prepared to keep all its citizens safer from infectious disease.</p>
            </div>
      </div>
    </div>
    
  )
}

export default SiteInfo;