"use client"
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

export const TakePhoto = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  return (
    <div className="flex flex-col items-center">
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={captureImage}
      >
        Take Photo
      </button>
      {capturedImage && (
        <img className="mt-4" src={capturedImage} alt="Captured" />
      )}
    </div>
  );
};

export default TakePhoto;