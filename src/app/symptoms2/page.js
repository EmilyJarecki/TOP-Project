import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormSymptoms from "@/components/FormSymptoms";
import PopUpResults from "@/components/PopUpResults";
import AdditionalResourcesCarousel from '@/components/AdditionalResourcesCarousel';

export default function Symptoms2() {

    return (
        <>
            <div className="bg-[#E4EAEE]">
                <Header />
                <FormSymptoms />
                <AdditionalResourcesCarousel />
                <Footer/>
            </div>
            
        </>

    )
};