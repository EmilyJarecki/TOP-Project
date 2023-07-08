import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PickSymptoms from "@/components/PickSymptoms"

export default function Symptoms() {

    return (
        <>
            <Header />
            <PickSymptoms />
            <a className="underline text-blue-500" href="/">Go BACK</a>
            <Footer/>
        </>

    )
};