import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { termsOfService } from "@/constants/termsOfService";
const Privacy = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="mt-10">
        {termsOfService.descriptions.map((description, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{description.title}</h2>
            <p className="text-gray-600">{description.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-gray-600 flex items-center">
        <HiOutlineMail className="mr-2" />
        <span>
          For any questions or concerns regarding our Terms of Service, please
          feel free to reach out to us at{" "}
          <a href="mailto:aviabookingonline123@email.com" className="underline">
            aviabookingonline123@email.com
          </a>
          .
        </span>
      </div>
    </div>
  );
};

export default Privacy;
