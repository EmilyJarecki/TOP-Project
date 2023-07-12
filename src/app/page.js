import Image from 'next/image';
import Header from '@/components/Header';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Inter, Rubik } from 'next/font/google';
import AdditionalResourcesCarousel from '@/components/AdditionalResourcesCarousel';

const rubik = Rubik({ subsets: ['latin'], variable: '--rubik-font' });

const inter = Inter({ subsets: ['latin'], variable: '--inter-font' });

export default function Home() {

  return (
    <main className={`${rubik.variable} ${inter.variable}`}>
      <Header />
      <div className='flex flex-col items-center justify-center font-bold text-[#30528F]' >
        <Link href='/symptoms'>
          <button className='shadow-md rounded-xl px-20 my-2'>Positive</button>
        </Link>
        <Link href='/symptoms2'>
          <button className='shadow-md rounded-xl px-20 my-2'>Negative</button>
        </Link>
        {/* <Link > */}
          <button className='shadow-md rounded-xl px-20 my-2'>Take a Photo to be Sure!</button>
        {/* </Link> */}
      </div>
      <AdditionalResourcesCarousel></AdditionalResourcesCarousel>
      <Footer />
    </main>

  )
} 
