import Footer from "@/components/Footer";
import Header from "@/components/Header";



export default function Faq() {

    return (
        <>
        <Header />
        <h1>FAQ Page</h1>
        <a className="underline text-blue-500" href="/">Go BACK</a>
        <center>
        <p className="font-rubik font-bold text-xl text-hych-title-blue leading-none tracking-tight">Frequently Asked</p>
        <p className="font-rubik font-bold text-xl text-hych-title-blue leading-none tracking-tight">Questions</p>
        </center>
        <br />
        <center>
        <p className="font-rubik font-bold text-m text-hych-subheading-blue leading-none tracking-tight">What is the goal of MakeMyTestCount?</p>
        </center>
        <br />
        <center>
        <p className="font-rubik font-bold text-s text-hych-subheading-blue leading-none tracking-tight">
        MakeMyTestCount is a part of an effort at the National Institutes of Health to develop standard ways to report at-home tests, and to securely and privately collect the information in a way that fits into existing data systems.
        <br />
        By reporting your test — whether negative or positive — you are part of that effort. When you report your test result, you help improve America’s understanding of how people are using at-home tests. 
        <br />
        You’re also helping researchers and public health teams figure out how best to use the data those test results give them.
        <br />
        At-home tests are likely to become even more popular in the future. When you report your results, you’re helping build the foundation of a system that is intended to help people across the country live safer, healthier lives. Thank you for doing your part - and for making your test count.
        <br />
        Want to report a test? It's easy!</p>
        </center>
        <Footer />
        </>

    )
};