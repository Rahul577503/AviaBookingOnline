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
      </video>

      <div className="flex flex-col items-center z-10 gap-6">
        <div className="max-w-4xl text-center tracking-tight">
          <h1
            className={`text-2xl font-extralight md:text-3xl text-white lg:text-4xl tracking-wide leading-8 md:leading-10 lg:leading-12 md:tracking-normal lg:tracking-wide ${
              videoLoaded ? "" : "text-white"
            }`}
          >
            <span>Fly Smart </span>
            <GiCommercialAirplane className="inline-block text-amber-500 text-xl md:text-3xl lg:text-4xl align-middle" />
            <span>Unlock Hidden Flight Deals</span>
            <br />
            <span className="block">
              Exclusive Offers Await: Dial Direct for Instant Access,{" "}
              <div className="lg:text-sm">
                <Link
                  href="tel:12345678900"
                  className="border-amber-500 text-2xl border-2 p-1 rounded-md hover:text-red-500"
                >
                  Toll Free:1234-567-8900
                </Link>
              </div>
            </span>
          </h1>
        </div>
        <div className="md:mt-4 lg:mb-8">
          <FlightForm />
        </div>
      </div>
    </main>
  );
};

export default FlightReservation;
