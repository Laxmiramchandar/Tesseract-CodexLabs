import React from "react";
import Lottie from "lottie-react";

const ServiceCard = ({ title, description, animation }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <Lottie
        animationData={animation}
        loop={true}
        className="w-40 h-40 mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;