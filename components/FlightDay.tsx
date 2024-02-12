import { useEffect } from "react";

const FlightDay = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://tp.media/content?trs=299451&shmarker=523035&color_button=%23f59e0b&target_host=www.aviasales.com%2Fsearch&locale=en&powered_by=false&origin=LON&destination=BKK&with_fallback=true&non_direct_flights=true&min_lines=5&border_radius=6&color_background=%23FFFFFF&color_text=%23000000&color_border=%23FFFFFF&promo_id=2811&campaign_id=100";
    script.async = true;

    const container = document.querySelector(".flight-delay-form");
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
    <div className="px-4 bg-opacity-50">
      <div className="flight-delay-form"></div>
    </div>
  );
};

export default FlightDay;
