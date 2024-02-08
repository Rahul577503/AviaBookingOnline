import React, { useEffect } from "react";
import { MdTravelExplore } from "react-icons/md";

const TryFlightComponents = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://tp.media/content?currency=inr&trs=299451&shmarker=523035&searchUrl=www.aviasales.com%2Fsearch&locale=en&powered_by=false&one_way=true&only_direct=true&period=year&range=7%2C14&primary=%230C73FE&color_background=%23ffffff&dark=%23000000&light=%23FFFFFF&achieve=%2345AD35&promo_id=4041&campaign_id=100";
    script.async = true;

    const container = document.querySelector(".try-flight");
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className=" p-8 text-slate-900">
          <MdTravelExplore  className="text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-4">
            Travel Simply and Economically
          </h2>
          <p className="text-lg py-2">
            Experience hassle-free and budget-friendly travel with us. Our team
            is dedicated to delivering exceptional customer service at every
            step of your journey
          </p>
        </div>

        <div className="px-4 bg-opacity-50">
          <div className="try-flight"></div>
        </div>
      </div>
    </div>
  );
};

export default TryFlightComponents;
