import React from "react";
import SocialMedia from "./SocialMedia";
import Image from "next/image";
import logo from "../assets/makeMyTestCount.png";

const Footer = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="bg-footer absolute bottom-0 text-white px-14 py-4">
        <div className="flex justify-center mb-2 ">
          <Image className="w-32" src={logo} alt="makemytestcount.org"></Image>
        </div>
        <div className="text-[8px] mb-2 text-center">
          This project has been funded by the National Institute of Biomedical
          Imaging and Bioengineering, National Institutes of Health, through the
          NIH RADx® Tech Initiative.
        </div>
        <div className="text-[6px] font-bold">
          <p>
            The MakeMyTestCount.org site does not provide professional medical
            advice. Consult a qualified health care provider for answers to your
            medical questions.
          </p>
          <p>
            The information provided on this website is only intended to be a
            general summary of information for the public. It is not intended to
            take the place of either the written law or regulations. NIBIB does
            not endorse or recommend any commercial products or services.
            Inclusion of an author's views or opinions on the website does not
            mean they state or reflect those of NIBIB, NIH, or the U.S.
            Government, and private parties may not use them for advertising or
            product endorsement purposes.
          </p>
        </div>
        <SocialMedia />
        <p className="text-[6px] text-center">
          @ 2023 CareEvolution, LLC. |{" "}
          <span className="hover:underline">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
