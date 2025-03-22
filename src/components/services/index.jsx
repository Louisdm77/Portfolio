import React from "react";
import { DiResponsive } from "react-icons/di";
import { IoAppsSharp } from "react-icons/io5";
import { FaGlobe, FaCode, FaShoppingCart } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const Services = () => {
  const services = [
    {
      service: "Responsive Web Design",
      icon: <DiResponsive />,
      description:
        "Creating designs that adapt seamlessly to different screen sizes.",
    },
    {
      service: "Single Page Applications",
      icon: <IoAppsSharp />,
      description:
        "Building dynamic applications that provide a smooth user experience.",
    },
    {
      service: "Web Development",
      icon: <FaGlobe />,
      description:
        "Developing perfectly tailored websites to meet specific client needs.",
    },
    {
      service: "API Integration",
      icon: <FaCode />,
      description:
        "Connecting third-party services and APIs for enhanced functionality.",
    },
    {
      service: "E-commerce",
      icon: <FaShoppingCart />,
      description:
        "Creating online stores with secure payment and cart systems.",
    },
    {
      service: "Firebase Integration",
      icon: <SiFirebase />,
      description:
        "Implementing Firebase for real-time data and backend services.",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="text-center bg-gray-900 rounded-xl lg:p-8 lg:h-auto shadow-lg transition-transform transform hover:scale-105"
            >
              <p className="flex justify-center text-3xl p-2 role">{service.icon}</p>
              <p className="text-xl font-bold mb-2 role">{service.service}</p>
              <p className="text-gray-400">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
