import React from 'react'
import Article from './Article'
import Image from 'next/image';
import cbs from "../assets/cbs.png";
import abc from "../assets/abc.png";


const ArticleList = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="grid grid-cols-2 gap-x-7 gap-y-4">
        <div className="h-56 w-32 border-2 ">
          <Image src={abc} alt="cbs article"></Image>
        </div>
        <div className="h-56 w-32 border-2 ">
          <Image src={cbs} alt="cbs article"></Image>
        </div>
        <div className="h-56 w-32 border-2 ">
          <Image src={cbs} alt="cbs article"></Image>
        </div>
        <div className="h-56 w-32 border-2 ">
          <Image src={cbs} alt="cbs article"></Image>
        </div>
        <div className="h-56 w-32 border-2 ">
          <Image src={cbs} alt="cbs article"></Image>
        </div>
        <div className="h-56 w-32 border-2 ">
          <Image src={cbs} alt="cbs article"></Image>
        </div>
        <div className="h-56 w-32 border-2 ">
          <Image src={cbs} alt="cbs article"></Image>
        </div>
      </div>
    </div>
  )
}

export default ArticleList