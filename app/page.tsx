"use client";
import React from "react";
import InfiniteHorizontalScroll from "@/components/InfiniteHorizontalScroll";
import CardComponents from "@/components/Card";
import FlightReservation from "@/components/FlightReservation";
import Deal from "@/components/Deal";
import FlightDay from "@/components/FlightDay";
import TryFlightComponents from "@/components/TryFlight";
import FlightMaps from "@/components/Map";

const HeroSection = () => {
  return (
    <div className="relative py-20">
      <div className="w-full h-full">
        <FlightReservation />
      </div>
      <div className="bg-gray-800">
        <InfiniteHorizontalScroll />
      </div>
      <div className="py-4 px-4">
        <CardComponents />
      </div>
      <div className="px-4">
        <Deal />
      </div>
      <div className="py-4">
        <FlightDay />
      </div>
      <div className="py-4">
        <TryFlightComponents />
      </div>
      <div className="py-4 px-4">
        <FlightMaps />
      </div>
    </div>
  );
};

export default HeroSection;
