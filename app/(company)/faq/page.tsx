import { FaQuestionCircle } from "react-icons/fa";
import { FaqData } from "@/constants/faq";

const FaqComponent=() => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-center text xl sm:text-4xl py-8">
      <FaQuestionCircle className="w-12 h-12 inline-block mr-1 text-4xl text-blue-500" />
        FAQ For AviaBookingOnline
        
      </h1>

      {FaqData.descriptions.map((description, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{description.title}</h2>
          <div className="space-y-4">
            <p>{description.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqComponent;
