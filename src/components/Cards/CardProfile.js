import React, { useState } from 'react';
import { Clock, MapPin, Calendar, User } from 'lucide-react';

const CardProfile = () => {
  const [timeZone, setTimeZone] = useState('America/Los_Angeles');
  
  const availabilityStats = [
    { value: "12", label: "Open Slots" },
    { value: "5", label: "Booked" },
    { value: "7", label: "Days Active" }
  ];

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 flex justify-center">
            <div className="relative">
              <img
                alt="Profile"
                src="/api/placeholder/150/150"
                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
              />
            </div>
          </div>
          <div className="w-full px-4 text-center mt-20">
            <div className="flex justify-center py-4 lg:pt-4 pt-8">
              {availabilityStats.map((stat, index) => (
                <div key={index} className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {stat.value}
                  </span>
                  <span className="text-sm text-blueGray-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
            Sarah Williams
          </h3>
          
          <div className="flex items-center justify-center text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
            <MapPin className="mr-2" size={16} />
            {timeZone.replace('_', ' ')}
          </div>

          <div className="mb-2 text-blueGray-600 mt-10 flex items-center justify-center">
            <Clock className="mr-2" size={16} />
            Available: Mon-Fri, 9 AM - 5 PM
          </div>
          
          <div className="mb-2 text-blueGray-600 flex items-center justify-center">
            <Calendar className="mr-2" size={16} />
            30-minute meeting slots
          </div>
        </div>

        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-9/12 px-4">
              <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                I'm a product manager with expertise in SaaS applications. 
                Book a slot with me to discuss product strategy, user experience, 
                or general product management advice.
              </p>
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => console.log('View available slots')}
              >
                View Available Slots
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;