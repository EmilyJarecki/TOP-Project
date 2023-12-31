import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Page1 from "@/components/Page1"
import AdditionalResourcesCarousel from '@/components/AdditionalResourcesCarousel';

export default function Symptoms() {

    return (
        <>
            <div className="bg-[#E4EAEE]">
                <Header />
                <Page1 />
                <AdditionalResourcesCarousel />
                <Footer/>
            </div>
            
        </>

    )
};