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
        <p className="font-rubik font-bold text-l text-hych-subheading-blue leading-none tracking-tight">What is the goal of MakeMyTestCount?</p>
        </center>
        <br />
        <center>
        <p className="pr-[1.875rem] pb-[1.25rem] text-base  ease-out duration-500 font-rubik font-bold text-hych-subheading-blue leading-none tracking-tight">
        MakeMyTestCount is a part of an effort at the National Institutes of Health to develop standard ways to report at-home tests, and to securely and privately collect the information in a way that fits into existing data systems.
        </p>
        <br />
        <p className="pr-[1.875rem] pb-[1.25rem] text-base  ease-out duration-500 font-rubik font-bold text-hych-subheading-blue leading-none tracking-tight">
        By reporting your test — whether negative or positive — you are part of that effort. When you report your test result, you help improve America’s understanding of how people are using at-home tests. 
        </p>
        <br />
        <p className="pr-[1.875rem] pb-[1.25rem] text-base  ease-out duration-500 font-rubik font-bold text-hych-subheading-blue leading-none tracking-tight">
        You’re also helping researchers and public health teams figure out how best to use the data those test results give them.
        </p>
        <br />
        <p className="pr-[1.875rem] pb-[1.25rem] text-base  ease-out duration-500 font-rubik font-bold text-hych-subheading-blue leading-none tracking-tight">
        At-home tests are likely to become even more popular in the future. When you report your results, you’re helping build the foundation of a system that is intended to help people across the country live safer, healthier lives. Thank you for doing your part - and for making your test count.
        </p>
        <br />
        <p className="pr-[1.875rem] pb-[1.25rem] text-base  ease-out duration-500 font-rubik font-bold text-hych-subheading-blue leading-none tracking-tight">
        <a href="https://report.makemytestcount.org/?&_ga=2.182742113.636952924.1688858707-1823723452.1688596346#Step01">Want to report a test? It's easy!</a>
        </p>
        </center>
        <Footer />
        </>

    )
};