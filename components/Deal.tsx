import React from "react";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

const Deal = () => {
  return (
    <div className="flex justify-center item-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="bg-blue-500 p-8 rounded-lg shadow-lg text-white">
          <FaPlaneDeparture className="text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-4">COME SEE WHAT YOU HAVE BEEN MISSING</h2>
          <p className="text-lg">Services At flightreservationsdesk.com our mission is to help domestic and international travelers to book flights and make changes and cancellations at discounted rates.</p>
        </div>

        <div className="bg-blue-500 p-8 rounded-lg shadow-lg text-white">
          <FaPlaneArrival className="text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <p className="text-lg">At flightreservationsdesk.com our mission is to help domestic and international travelers to book flights and make changes and cancellations at discounted rates.</p>
        </div>
      </div>
    </div>
  );
};

export default Deal;
