import React, { useState } from "react";
import FlightForm from "./FlightForm";
import { GiCommercialAirplane } from "react-icons/gi";
import { TbSend } from "react-icons/tb";

const FlightReservation = () => {
  const [textColor, setTextColor] = useState("text-white");

  return (
    <main className="relative flex justify-center items-center min-h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        onError={() => setTextColor("text-gray-900")}
      >
        <source  src={require("../public/video.mp4")} type="video/mp4" />
      </video>
      <div className="flex flex-col items-center z-10 gap-2">
        <div className="max-w-4xl text-center tracking-tight">
          <h1
            className={`text-2xl md:text-3xl lg:text-4xl leading-tight ${textColor}`}
          >
            <span>Fly Smart </span>
            <GiCommercialAirplane className="inline-block text-amber-500 text-xl md:text-3xl lg:text-4xl align-middle" />
            <span>Unlock Hidden Flight Deals</span>
            <br />
            <span>Exclusive Offers Await:</span>
            <span>Dial Direct for Instant Access,</span>
            <span>No Waiting!</span>
          </h1>
          <button className="mt-8 bg-red-800 text-lg hover:bg-rose-800 text-white font-semibold py-3 px-6 rounded inline-flex items-center">
            Send Mail
            <TbSend className="ml-2" />
          </button>
        </div>
        <div className="md:mt-6 lg:mb-20 ">
          <FlightForm />
        </div>
      </div>
    </main>
  );
};

export default FlightReservation;
