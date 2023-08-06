"use client"
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Image from "next/image";
import invalidTest from "../assets/takePhotos/invalidTest.png";
import negativeTest from "../assets/takePhotos/negativeTest.png";
import positiveTest from "../assets/takePhotos/positiveTest.png";


export const TakePhoto = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  return (
    <div className="container text-center h-max">
      <div className="flex flex-col items-center">
        <p className="text-hych-title-blue font-bold">Compare your sample results to the current results below.</p>
        <br />
        <p className="text-hych-subheading-blue">Positive Result</p>
        <Image src={positiveTest} alt="postivie covid-19 result"/>
        <p className="text-hych-subheading-blue">Negative Result</p>
        <Image src={negativeTest} alt="negative covid-19 result" />
        <p className="text-hych-subheading-blue">Invalid Result</p>
        <Image src={invalidTest} alt="invalid covid-19 result" />
        <br />
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
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
    </div>
  );
};

export default TakePhoto;