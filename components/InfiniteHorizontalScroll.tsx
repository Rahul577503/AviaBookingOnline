import React from "react";
const InfiniteHorizontalScroll = () => {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="py-12 animate-marquee whitespace-nowrap">
        <span className="sm:text-4xl mx-4 text-green-500 xl:text-2xl">Unbeatable Deals</span>
        <span className="sm:text-4xl mx-4 text-orange-700 xl:text-2xl">Seamless Booking Experience</span>
        <span className="sm:text-4xl mx-4 text-amber-400 xl:text-2xl">Exclusive Offers</span>
        <span className="sm:text-4xl mx-4 text-gray-400 xl:text-2xl">Savings Galore</span>
      </div>

      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
      <span className="sm:text-4xl mx-4 text-green-500 xl:text-2xl">Unbeatable Deals</span>
        <span className="sm:text-4xl mx-4 text-orange-700 xl:text-2xl">Seamless Booking Experience</span>
        <span className="sm:text-4xl mx-4 text-amber-400 xl:text-2xl">Exclusive Offers</span>
        <span className="sm:text-4xl mx-4 text-gray-400 xl:text-2xl">Savings Galore</span>
      </div>
    </div>
  );
};

export default InfiniteHorizontalScroll;
