import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Privacy() {
  return (
    <>
      <Header />
      <center>
        <h1>Privacy Policy</h1>
      </center>
      <h3>Your Data:</h3>
      <ul>
        <li>Will never be used for advertising</li>
        <li>Will never be sold</li>
        <li>
          May be used by CareEvolution without your identifying information
        </li>
        <li>Is securely stored in the United States by CareEvolution.</li>
        <li>
          May be shared with the organizers of the Projects in which you choose
          to participate (which may have their own privacy practices)
        </li>
      </ul>
      <h3>How Your Data Helps You</h3>
      <p>
        MyDataHelps™ and myFHR™ allow you to participate in different types of
        health projects, such as:
      </p>
      <ul>
        <li>Research studies</li>
        <li>Healthcare quality improvement programs</li>
        <li>Health and wellness tools</li>
      </ul>
      <h3>Data You Can Share</h3>
      <p>
        When you participate in a Project, you may be asked to share some of
        your information, such as:
      </p>
      <ul>
        <li>Your medical history</li>
        <li>
          Information from digital health devices, such as your heart rate
        </li>
        <li>App analytics and usage information</li>
      </ul>
      <p>
        You may withdraw from a Project and request data deletion at any time.
      </p>
      <p>
        CareEvolution uses appropriate physical, organizational, and technical
        safeguards to protect the confidentiality and integrity of the
        information we collect.
      </p>
      <Footer />
    </>
  );
}
