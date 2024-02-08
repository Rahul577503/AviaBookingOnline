import React, { useState } from "react";
import FlightForm from "./FlightForm";
import { GiCommercialAirplane } from "react-icons/gi";
import { TbSend } from "react-icons/tb";

const FlightReservation = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <main className="relative flex justify-center items-center min-h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={require("../public/video.mp4")}
        autoPlay
        muted
        loop
        onError={() => setVideoError(true)} 
      />
      {!videoError && (
        <div className="flex flex-col items-center z-10 gap-2">
          <div className="max-w-4xl text-center tracking-tight">
            <h1 className="text-2xl md:text-3xl lg:text-4xl  text-white  leading-tight">
              <span className="text-white">Fly Smart </span>
              <GiCommercialAirplane className="inline-block text-amber-500 text-xl md:text-3xl lg:text-4xl align-middle" />
              <span className="text-white">Unlock Hidden Flight Deals</span>
              <br />
              <span className="text-white">Exclusive Offers Await:</span>
              <span className="text-white">
                Dial Direct for Instant Access,
              </span>
              <span className="text-white">No Waiting!</span>
            </h1>
            <button className="mt-8 bg-red-800 text-lg hover:bg-rose-800 text-white font-semibold py-3 px-6 rounded inline-flex items-center">
              Send Mail
              <TbSend className="ml-2" />
            </button>
          </div>
          <div className="md:mt-6 lg:mb-20">
            <FlightForm />
          </div>
        </div>
      )}
      {videoError && (
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-gray-900">
            There was an error loading the video.
          </span>
        </div>
      )}
    </main>
  );
};

export default FlightReservation;
