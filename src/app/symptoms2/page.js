import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormSymptoms from "@/components/FormSymptoms";
import AdditionalResourcesCarousel from '@/components/AdditionalResourcesCarousel';

export default function Step1() {

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