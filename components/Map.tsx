import React, { useEffect } from "react";

const FlightMaps = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://tp.media/content?currency=usd&trs=299451&shmarker=523035&lat=51.51&lng=0.06&powered_by=true&search_host=www.aviasales.com%2Fsearch&locale=en&origin=LON&value_min=0&value_max=1000000&round_trip=true&only_direct=false&radius=1&draggable=true&disable_zoom=false&show_logo=false&scrollwheel=false&primary=%233FABDB&secondary=%23f59e0b&light=%23ffffff&width=1500&height=500&zoom=2&promo_id=4054&campaign_id=100";
    script.async = true;

    const container = document.querySelector(".flight-map");
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
    <div className="m-auto max-w-screen-lg">
      <h1 className="sm:text-4xl text-lg text-gray-900 border-b-4 border-blue-900 font-bold text-center py-2">
        Chart Your Journey with Affordable Flights
      </h1>

      <br />
      <div className=" border-2 rounded-md shadow-md p-4">
        <div className="flight-map"></div>
      </div>
    </div>
  );
};

export default FlightMaps;
