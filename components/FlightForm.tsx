import React, { useEffect } from "react";
const FlightForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://tp.media/content?currency=usd&trs=299451&shmarker=523035&show_hotels=false&powered_by=false&locale=en&searchUrl=www.aviasales.com%2Fsearch&color_button=%23fbbf24&color_icons=%231F2937&dark=%23262626&light=%23FFFFFF&secondary=%231f2937&special=%23e2e8f0&color_focused=%23FBBF2432&border_radius=13&no_labels=true&plain=true&promo_id=7879&campaign_id=100";
    script.async = true;
    const container = document.querySelector(".flight-search-form");
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
      <div
        className="flight-search-form"
        style={{ maxWidth: "1000px", opacity: "0.9" }}
      ></div>
      <script
        async
        src="https://tp.media/content?currency=usd&trs=299451&shmarker=523035&show_hotels=false&powered_by=false&locale=en&searchUrl=www.aviasales.com%2Fsearch&color_button=%23fbbf24&color_icons=%231F2937&dark=%23262626&light=%23FFFFFF&secondary=%231f2937&special=%23e2e8f0&color_focused=%23FBBF2432&border_radius=13&no_labels=true&plain=true&promo_id=7879&campaign_id=100"
      ></script>
    </div>
  );
};

export default FlightForm;
