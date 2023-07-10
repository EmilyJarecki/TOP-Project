import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PickSymptoms from "@/components/PickSymptoms"
import FormSymptoms from "@/components/FormSymptoms";

export default function Symptoms() {

    return (
        <>
            <Header />
            <PickSymptoms />
            <FormSymptoms />
            <a className="underline text-blue-500" href="/">Go BACK</a>
            <Footer/>
        </>

    )
};