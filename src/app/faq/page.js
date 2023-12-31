import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Link from "next/link";



export default function Faq() {

    return (
        <div className="bg-[#E4EAEE]">
        <Header />
        <center>
            <p className="text-3xl font-medium flex place-content-center text-hych-title-blue pt-8">Frequently Asked Questions</p>
        </center>
        <br />
        <center>
            <p className="text-2xl text-hych-title-blue">What is the goal of MakeMyTestCount?</p>
        </center>
        <br />
        <center>
            <p className="text-sm text-hych-subheading-blue mx-[10%]">
            MakeMyTestCount is a part of an effort at the National Institutes of Health to develop standard ways to report at-home tests, and to securely and privately collect the information in a way that fits into existing data systems.
            </p>
        <br />
            <p className="text-sm text-hych-subheading-blue mx-[10%]">
            By reporting your test — whether negative or positive — you are part of that effort. When you report your test result, you help improve America’s understanding of how people are using at-home tests. 
            </p>
        <br />
            <p className="text-sm text-hych-subheading-blue mx-[10%]">
            You’re also helping researchers and public health teams figure out how best to use the data those test results give them.
            </p>
        <br />
            <p className="text-sm text-hych-subheading-blue mx-[10%]">
            At-home tests are likely to become even more popular in the future. When you report your results, you’re helping build the foundation of a system that is intended to help people across the country live safer, healthier lives. Thank you for doing your part - and for making your test count.
            </p>
        <br />
            <p className="flex justify-center pr-[1.875rem] pb-[1.25rem] text-[13px]  ease-out duration-500 font-rubik font-bold text-hych-subheading-blue leading-none tracking-tight">
            <a href="/" className="underline">Want to report a test? It&apos;s easy!</a>
            </p>
            
        </center>
        <br />
        <left>
            <div className="grid grid-cols-1 divide-y">
            <p className="text-l text-hych-title-blue ml-2">Who can see my results</p>
            <br />
            <p className="text-l text-hych-title-blue ml-2">Do I have to give my personal information to report test results</p>
            <br />
            <p className="text-l text-hych-title-blue ml-2">How does MakeMyTestCount protect my information</p>
            <br />
            <p className="text-l text-hych-title-blue ml-2">Why should I bother reporting a negative test?</p>
            <br />
            <p className="text-l text-hych-title-blue ml-2">What kinds of tests can I report on this site?</p>
            <br />
            <p className="text-l text-hych-title-blue ml-2">Is this website the only way that at-home tests get reported?</p>
            <br />
            <p className="text-l text-hych-title-blue ml-2">Where does the post-testing guidance on MakeMyTestCount.org come from?</p>
            <br />
            <p className="text-l text-hych-title-blue ml-2">Who is CareEvolution?</p>
            <br />
            <p className="text-l text-hych-title-blue ml-2">Are there other ways I can help besides reporting my test results?</p>
            <br />
            <p className="text-l text-hych-title-blue ml-2">What if I have a question that wasn’t answered here?</p>
            </div>
        </left>
        <Footer />
        </div>

    )
};