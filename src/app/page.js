'use client'
import { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import Link from 'next/link';
import { Inter, Rubik } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowYouCanHelp from '@/components/HowYouCanHelp';
import map from "../assets/map.png"
import family from "../assets/family.png"
import AdditionalResourcesCarousel from '@/components/AdditionalResourcesCarousel';
import TakePhoto from '@/components/TakePhoto';
import HeatMap from '@/components/HeatMap';

const rubik = Rubik({ subsets: ['latin'], variable: '--rubik-font' });

const inter = Inter({ subsets: ['latin'], variable: '--inter-font' });

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <main className={`${rubik.variable} ${inter.variable} bg-[#E4EAEE]`}>
      <Header />
      <div className="flex flex-row-reverse md:flex-col items-center justify-center bg-[#E4EAEE]">
        <div className="flex flex-col items-center justify-center ">
          <HeatMap></HeatMap>
        </div>
        <div className='flex flex-col items-center justify-center font-bold text-[#30528F]' >
          <Link href='/symptoms'>
            <button className='shadow-md rounded-xl px-20 my-3 bg-white'>Positive</button>
          </Link>
          <Link href='/symptoms2'>
            <button className='shadow-md rounded-xl px-20 my-3 bg-white'>Negative</button>
          </Link>
          <button className='shadow-md rounded-xl px-20 my-3 bg-white' onClick={handleModalOpen}>Take a Photo to Check!</button>
        </div>
        <Modal isOpen={isOpen} onRequestClose={handleModalClose}>
          <TakePhoto />
        </Modal>
      </div>

      <div className="flex flex-col justify-center items-center bg-[#E4EAEE]">

        <p className="text-center text-[#243C6C] text-[20px] font-bold font-inter mt-[52px]">Why Your Test Results Matter</p>
        <p className="text-[#385FA4] text-[11.5px] font-bold p-[9px] w-[350px] mt-[20px] mb-[75px] rounded-[11px] shadow-md bg-white">Your reports provide valuable information about patterns and trends related to COVID-19 symptoms, disease severity, and treatment outcomes. These insights enable us to refine our understanding of the virus, identify new variants, and adapt our strategies accordingly</p>
        <HowYouCanHelp></HowYouCanHelp>
      </div>

      {/* <div className='flex flex-col items-center justify-center font-bold text-[#30528F]' >
        <Link href='/symptoms'>
          <button className='shadow-md rounded-xl px-20 my-3'>Positive</button>
        </Link>
        <Link href='/symptoms2'>
          <button className='shadow-md rounded-xl px-20 my-3'>Negative</button>
        </Link>
        <button className='shadow-md rounded-xl px-20 my-3' onClick={handleModalOpen}>Take a Photo to Check!</button>
      </div>
      <Modal isOpen={isOpen} onRequestClose={handleModalClose}>
        <TakePhoto />
      </Modal>

      <p className="text-center text-[#243C6C] text-[20px] font-bold font-inter mt-[52px]">Why Your Test Results Matter</p>
      <p className="text-[#385FA4] text-[11.5px] font-bold p-[9px] mx-[50px] mt-[20px] mb-[75px] rounded-[11px] shadow-md">Your reports provide valuable information about patterns and trends related to COVID-19 symptoms, disease severity, and treatment outcomes. These insights enable us to refine our understanding of the virus, identify new variants, and adapt our strategies accordingly</p>
      <HowYouCanHelp></HowYouCanHelp> */}

      <AdditionalResourcesCarousel></AdditionalResourcesCarousel>
      <p className="text-center font-bold text-[#385FA4] text-[30px] pt-20 bg-[#E4EAEE] sm:text-xl sm:pt-10 sm:pb-6">Together, We Can Make A Difference</p>
      <Footer />
    </main>

  )
} 
