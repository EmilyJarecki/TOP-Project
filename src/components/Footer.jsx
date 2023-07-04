import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen ">
        <div className="bg-slate-700 fixed bottom-0 text-white">
      <div className="text-sm">
        This project has been funded by the National Institute of Biomedical
        Imaging and Bioengineering, National Institutes of Health, through the
        NIH RADx® Tech Initiative.
      </div>
      Footer
      <div className="text-xs">
        The MakeMyTestCount.org site does not provide professional medical
        advice. Consult a qualified health care provider for answers to your
        medical questions. The information provided on this website is only
        intended to be a general summary of information for the public. It is
        not intended to take the place of either the written law or regulations.
        NIBIB does not endorse or recommend any commercial products or services.
        Inclusion of an author's views or opinions on the website does not mean
        they state or reflect those of NIBIB, NIH, or the U.S. Government, and
        private parties may not use them for advertising or product endorsement
        purposes.
      </div>

        </div>
    </div>
  );
};

export default Footer;
