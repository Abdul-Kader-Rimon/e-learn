 import { CheckCircle } from 'lucide-react';
import React from 'react';
 
const WhyChooseUs = () => {
     const features = [
       "100% Quality Courses",
       "Expert Instructors",
       "Affordable Pricing",
       "Lifetime Course Access",
       "Certificate After Completion",
       "24/7 Student Support",
    ];
    
    const row1Features = features.slice(0, 3);
    const row2Features = features.slice(3, 6);
    return (
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl text-base-content font-bold mb-6">
            Why Choose Us
          </h2>
          <p className=" text-base-content max-w-2xl mx-auto mb-10">
            We provide top-quality courses, expert teachers, and a powerful
            learning experience to help you achieve your goals.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {row1Features.map((feature, index) => (
                <div
                    key={index}
                    className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                >
                <CheckCircle className="w-10 h-10 mx-auto text-green-500 mb-4" />
                <h3 className='text-xl dark:text-black font-semibold'>
                    {feature}
                </h3>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {row2Features.map((feature, index) => (
                <div
                    key={index}
                    className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                >
                <CheckCircle className="w-10 h-10 mx-auto text-green-500 mb-4" />
                <h3 className='text-xl dark:text-black font-semibold'>
                    {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
 };
 
 export default WhyChooseUs;