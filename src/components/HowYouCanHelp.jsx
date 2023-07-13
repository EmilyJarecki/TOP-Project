import Link from "next/link";

export default function HowYouCanHelp() {

    return (
        <div className="bg-hych-bg-blue mx-4 rounded-md py-8 px-10">
            <div className="bg-white rounded-md flex flex-col items-center p-3">
                <p className="font-rubik font-bold text-xl text-hych-title-blue leading-none tracking-tight">How You Can Help</p>
                <div className="container px-5 flex-col">
                    <div className="flex flex-col gap-2 mt-6">
                        <p className="text-[7.45pt] font-extrabold text-hych-subheading-blue tracking-tight">Symptom Tracking:</p>
                        <p className="text-[7.45pt] pl-4 italic leading-none ">Stay vigilant and report any unusual or persistent COVID-19 symptoms you experience, even if you have been vaccinated or previously infected. Your reports can help identify emerging symptoms and better understand the long-term effects of the virus.</p>
                    </div>
                    <div className="flex flex-col gap-2 mt-6">
                        <p className="text-[7.45pt] font-extrabold text-hych-subheading-blue tracking-tight">Treatment Outcomes:</p>
                        <p className="text-[7.45pt] pl-4 px-5 italic leading-none">If you or a loved one have undergone treatment for COVID-19, <Link className="underline text-blue-400" href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">sharing your experience</Link> and outcomes can significantly contribute to our understanding of different therapeutic approaches. Your insights can help shape future treatment guidelines and improve patient care.</p>
                    </div>
                    <div className="flex flex-col gap-2 mt-6">
                        <p className="text-[7.45pt] font-extrabold text-hych-subheading-blue tracking-tight">Diagnostic Test Feedback:</p>
                        <p className="text-[7.45pt] pl-4 px-5 italic leading-none">If you have concerns about the accuracy or reliability of a COVID-19 diagnostic test, <Link className="underline text-blue-400" href="https://www.fda.gov/">please report them to the FDA</Link>. Your feedback assists us in identifying potential issues and ensuring the effectiveness of testing strategies.</p>
                    </div>
                </div>
            </div>
        </div >
    )
};