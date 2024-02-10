import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { privacyPolicy } from '@/constants/privacyPolicy'
const Privacy = () => {
  return (
    <div className="container mx-auto px-4 md:px-4">
      <div className="mt-10">
        {privacyPolicy.descriptions.map((description, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{description.title}</h2>
            <p className="text-gray-600">{description.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-gray-600 flex items-center">
        <HiOutlineMail className="mr-2" />
        <span>Contact us for any further inquiries.</span>
      </div>
    </div>
  )
}

export default Privacy