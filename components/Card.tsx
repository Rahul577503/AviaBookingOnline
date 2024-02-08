import React from "react";
import { FiSearch, FiDollarSign, FiBook, FiGlobe } from "react-icons/fi";

interface CardProps {
  title: string;
  content: string;
  icon: JSX.Element;
}

const Card: React.FC<CardProps> = ({ title, content, icon }) => {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden min-h-10 p-4">
    <div className="p-4">
      <div className="flex items-center justify-center mb-2">
        <div className="bg-gray-200 rounded-full p-3">
          {icon}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <p className="text-gray-700 mt-2">{content}</p>
    </div>
  </div>
  );
};

const CardComponents: React.FC = () => {
  return (
    <div className="flex justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="Search and Save"
          content="Save up to 60% by comparing prices from hundreds of travel sites at once."
          icon={<FiSearch className="text-blue-500 text-3xl" />}
        />
        <Card
          title="Price Guarantee"
          content="There are no extra charges or hidden fees. The price you see is what you pay."
          icon={<FiDollarSign className="text-green-500 text-3xl" />}
        />
        <Card
          title="Easy Bookings"
          content="Our travel search engine is the easiest and cheapest way to book your next trip."
          icon={<FiBook className="text-yellow-500 text-3xl" />}
        />
        <Card
          title="Explore the World"
          content="Plan your trips with our Experienced Agents available 24*7."
          icon={<FiGlobe className="text-purple-500 text-3xl" />}
        />
      </div>
    </div>
  );
};

export default CardComponents;
