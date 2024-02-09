import React, { useState } from "react";
import FlightForm from "./FlightForm";
import { GiCommercialAirplane } from "react-icons/gi";
import { TbSend } from "react-icons/tb";
import Link from "next/link";

const FlightReservation = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <main
      className={`relative flex justify-center items-center min-h-screen ${
        videoLoaded ? "" : "bg-gray-800 text-white"
      }`}
    >
      <video
        className={`absolute inset-0 w-full h-full object-cover z-0 ${
          videoLoaded ? "" : "hidden"
        }`}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src={require("../public/video.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col items-center z-10 gap-2">
        <div className="max-w-4xl text-center tracking-tight">
          <h1
            className={`text-2xl md:text-3xl text-white lg:text-4xl leading-tight ${
              videoLoaded ? "" : "text-white"
            }`}
          >
            <span>Fly Smart </span>
            <GiCommercialAirplane className="inline-block text-amber-500 text-xl md:text-3xl lg:text-4xl align-middle" />
            <span>Unlock Hidden Flight Deals</span>
            <br />
            <span>Exclusive Offers Await:</span>
            <span>Dial Direct for Instant Access,</span>
            <span>No Waiting!</span>
          </h1>
          <button className="mt-8 bg-amber-500 text-lg hover:bg-amber-400 text-white font-semibold py-3 px-6 rounded inline-flex items-center">
            <Link href="mailto:aviaBookingOnline.support@gmail.com">Send Mail</Link>

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
