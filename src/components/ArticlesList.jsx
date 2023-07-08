import React from 'react'
// import Article from './Article'
import Image from 'next/image';
import cbs from "../assets/cbs.png";
import abc from "../assets/abc.png";
import nih from "../assets/nih.png";
import whitehouse from "../assets/whitehouse.png";
import time from "../assets/time.png";
import verywell from "../assets/verywell.png";
import marketwatch from "../assets/marketwatch.png";


const ArticleList = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="grid grid-cols-2 gap-x-7 gap-y-4">
        <div className="h-56 w-32 shadow-xl border-[1px] border-gray-50">
          <Image src={abc} alt="abc article"></Image>
        </div>
        <div className="h-56 w-32 shadow-xl border-[1px] border-gray-50">
          <Image src={cbs} alt="cbs article"></Image>
        </div>
        <div className="h-56 w-32 shadow-xl border-[1px] border-gray-50">
          <Image src={nih} alt="nih article"></Image>
        </div>
        <div className="h-56 w-32 shadow-xl border-[1px] border-gray-50">
          <Image src={time} alt="time article"></Image>
        </div>
        <div className="h-56 w-32 shadow-xl border-[1px] border-gray-50">
          <Image src={verywell} alt="verywell article"></Image>
        </div>
        <div className="h-56 w-32 shadow-xl border-[1px] border-gray-50">
          <Image src={marketwatch} alt="market watch article"></Image>
        </div>
        <div className="h-56 w-32 shadow-xl border-[1px] border-gray-50">
          <Image src={whitehouse} alt="white house article"></Image>
        </div>
      </div>
    </div>
  )
}

export default ArticleList