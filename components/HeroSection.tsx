import React from "react";
import Image from "next/image";

const Airline =
  "https://images.unsplash.com/photo-1583202075376-837d5ff1bf0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZsaWdodHxlbnwwfHwwfHx8MA%3D%3D";

const HeroSection = () => {
  return (
    <div className="relative z-20">
      <div className="w-full h-full">
        <Image
          alt="airline"
          height={500}
          width={1600}
          src={Airline}
          priority
          className="object-cover"
          style={{
            width: "100%",
            height: "100vh",
          }}
        />
      </div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
        <h1 className="text-4xl font-bold mb-4">
          Change & Cancel Flight Reservations on Discounts
        </h1>
        <p className="text-lg">Unpublished Flight Reservations Deals</p>
        <p className="text-lg">
          Agents Direct Line - No IVR No Hold Time. Call Now 1877-804-0909
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
