import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PickSymptoms from "@/components/PickSymptoms"
import FormSymptoms from "@/components/FormSymptoms";
import PopUpResults from "@/components/PopUpResults";

export default function Symptoms() {

    return (
        <>
            <div className="bg-[#E4EAEE]">
                <Header />
                <PickSymptoms />
                {/* <FormSymptoms />
                <PopUpResults />
                <a className="underline text-blue-500" href="/">Go BACK</a>
                <Footer/> */}
            </div>
            
        </>

    )
};