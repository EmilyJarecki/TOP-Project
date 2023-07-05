import Image from 'next/image';
import Header from '@/components/Header';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Inter, Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], variable: '--rubik-font' });

const inter = Inter({ subsets: ['latin'], variable: '--inter-font' });

export default function Home() {

  return (
    <main className={`${rubik.variable} ${inter.variable}`}>
      <Header />
      <h1>This is the Landing Page</h1>
      <Footer />
    </main>

  )
} 
