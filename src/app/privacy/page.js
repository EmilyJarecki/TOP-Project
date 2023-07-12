import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Privacy() {
  return (
    <div className="text-hych-title-blue font-inter">
      <Header />
      <div class="h-8 bg-gradient-to-b from-gray-200 ..."></div>
      <p className="text-3xl tracking-wide font-semibold	pt-6 pb-2 text-center">
        Privacy Policy
      </p>
      <div className="text-xs leading-3 pl-10 pr-8 tracking-tight font-medium">
        <p className="my-4 font-medium">Your Data:</p>
        <ul className="px-4 mb-8">
          <li className="list-disc ">Will never be used for advertising</li>
          <li className="list-disc ">Will never be sold</li>
          <li className="list-disc ">
            May be used by CareEvolution without your identifying information
          </li>
          <li className="list-disc ">
            Is securely stored in the United States by CareEvolution.
          </li>
          <li className="list-disc ">
            May be shared with the organizers of the Projects in which you
            choose to participate (which may have their own privacy practices)
          </li>
        </ul>
        <p className="my-4 font-medium">How Your Data Helps You</p>
        <p>
          MyDataHelps™ and myFHR™ allow you to participate in different types of
          health projects, such as:
        </p>
        <ul className="px-4 mb-8">
          <li className="list-disc">Research studies</li>
          <li className="list-disc">Healthcare quality improvement programs</li>
          <li className="list-disc">Health and wellness tools</li>
        </ul>
        <p className="my-4 font-medium">Data You Can Share</p>
        <p>
          When you participate in a Project, you may be asked to share some of
          your information, such as:
        </p>
        <ul className="px-4 mb-8">
          <li className="list-disc">Your medical history</li>
          <li className="list-disc">
            Information from digital health devices, such as your heart rate
          </li>
          <li className="list-disc">App analytics and usage information</li>
        </ul>
        <p className="my-4">
          You may withdraw from a Project and request data deletion at any time.
        </p>
        <p>
          CareEvolution uses appropriate physical, organizational, and technical
          safeguards to protect the confidentiality and integrity of the
          information we collect.
        </p>
      </div>
      <Footer />
    </div>
  );
}
