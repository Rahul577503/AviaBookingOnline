import React, { useEffect } from "react";
const FlightForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://tp.media/content?currency=inr&trs=299451&shmarker=523035&show_hotels=true&powered_by=false&locale=en&searchUrl=www.aviasales.com%2Fsearch&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=23&no_labels=true&plain=true&promo_id=7879&campaign_id=100";
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
      <div className="flight-search-form" style={{ maxWidth: "1150px",opacity: "0.9" }}></div>
      <script
        async
        src="https://tp.media/content?currency=inr&trs=299451&shmarker=523035&show_hotels=true&powered_by=false&locale=en&searchUrl=www.aviasales.com%2Fsearch&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=23&no_labels=true&plain=true&promo_id=7879&campaign_id=100"
      ></script>
    </div>
  );
};

export default FlightForm;
