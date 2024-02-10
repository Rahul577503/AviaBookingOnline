import React, { useEffect } from "react";
import { FaPlaneDeparture } from "react-icons/fa";

const Deal = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://tp.media/content?currency=inr&trs=299451&shmarker=523035&destination=DEL&target_host=www.aviasales.com%2Fsearch&locale=en&limit=6&powered_by=false&primary=%230085FF&promo_id=4044&campaign_id=100";
    script.async = true;

    const container = document.querySelector(".most-visited");
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && script.parentNode) {
        container.removeChild(script);
      }
    };
  }, []);
  return (
    <div className="flex justify-center item-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 text-gray-800 flex flex-col items-center">
          <div className="bg-gray-800 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
            <FaPlaneDeparture className="text-white text-4xl mx-auto" />
          </div>
          <h2 className="text-2xl font-bold mb-4">
            COME SEE WHAT YOU HAVE BEEN MISSING
          </h2>
          <p className="text-lg">
            Services At flightreservationsdesk.com our mission is to help
            domestic and international travelers to book flights and make
            changes and cancellations at discounted rates.
          </p>
        </div>

        <div className="px-4 bg-opacity-50">
          <div className="most-visited"></div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
