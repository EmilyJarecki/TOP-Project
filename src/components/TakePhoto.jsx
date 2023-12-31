"use client"
import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import Image from "next/image";
import invalidTest from "../assets/takePhotos/invalidTest.png";
import negativeTest from "../assets/takePhotos/negativeTest.png";
import positiveTest from "../assets/takePhotos/positiveTest.png";
import Link from "next/link";


export const TakePhoto = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [facingMode, setFacingMode] = useState(null);
  
  const FACING_MODE_USER = "user";
  const FACING_MODE_ENVIRONMENT = "environment";

  const videoConstraints = {
    facingMode: FACING_MODE_USER
  };
  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };


  const handleClick = useCallback(() => {
    setFacingMode(
      prevState =>
        prevState === FACING_MODE_USER
          ? FACING_MODE_ENVIRONMENT
          : FACING_MODE_USER
    );
  }, []);

  return (
    <div className="container text-center flex flex-col items-center ">
      <div className="w-[40%] lg:w-[55%] md:w-[70%] sm:w-[100%]">
        <p className="text-hych-title-blue font-bold">Compare your sample results to the current results below.</p>
        <br />
        <p className="text-hych-subheading-blue">Positive Result</p>
        <Image src={positiveTest} alt="postivie covid-19 result"/>
        <p className="text-hych-subheading-blue">Negative Result</p>
        <Image src={negativeTest} alt="negative covid-19 result" />
        <p className="text-hych-subheading-blue">Invalid Result</p>
        <Image src={invalidTest} alt="invalid covid-19 result" />
        <br />
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded" onClick={handleClick}>Switch Camera</button>
        <br />
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" videoConstraints={{
          ...videoConstraints,
          facingMode
        }} 
        />
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
          onClick={captureImage}
        >
          Take Photo
        </button>
        {capturedImage && (
          <img className="mt-4" src={capturedImage} alt="Captured" />
        )}
      </div>
        <Link href="/symptoms">
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded">Complete</button>
        </Link>
    </div>
  );
};

export default TakePhoto;