import Image from 'next/image';
import Header from '@/components/Header';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Inter, Rubik } from 'next/font/google';
// import Landing from '@/components/Landing'
import map from "../assets/map.png"
import HowYouCanHelp from '@/components/HowYouCanHelp';


import AdditionalResourcesCarousel from '@/components/AdditionalResourcesCarousel';

const rubik = Rubik({ subsets: ['latin'], variable: '--rubik-font' });

const inter = Inter({ subsets: ['latin'], variable: '--inter-font' });

export default function Home() {

  return (
    <main className={`${rubik.variable} ${inter.variable}`}>
      <Header />
      {/* <Landing /> */}
      <div className="flex flex-col items-center justify-center ">
        <p className="bg-[#5B83CB] text-[#FAFBFF] text-[11.25px] mt-[42px] mb-[24px] py-[4px] px-[12px] rounded-full">12,345 positive tests today</p>
        <Image src={map} alt='map of the united states'></Image>
      </div>
      <div className='flex flex-col items-center justify-center font-bold text-[#30528F]' >
        <Link href='/symptoms'>
          <button className='shadow-md rounded-xl px-20 my-3'>Positive</button>
        </Link>
        <Link href='/symptoms2'>
          <button className='shadow-md rounded-xl px-20 my-3'>Negative</button>
        </Link>
        <Link href="/takePhoto">
          <button className='shadow-md rounded-xl px-20 my-3'>Take a Photo to be Sure!</button>
        </Link>
      </div>
      <p className="text-center text-[#243C6C] text-[20px] font-bold font-inter mt-[52px]">Why Your Test Results Matter</p>
      <p className="text-[#385FA4] text-[11.5px] font-bold p-[9px] mx-[50px] mt-[20px] mb-[75px] rounded-[11px] shadow-md">Your reports provide valuable information about patterns and trends related to COVID-19 symptoms, disease severity, and treatment outcomes. These insights enable us to refine our understanding of the virus, identify new variants, and adapt our strategies accordingly</p>
      <HowYouCanHelp></HowYouCanHelp>
      <AdditionalResourcesCarousel></AdditionalResourcesCarousel>
      <Footer />
    </main>

  )
} 
