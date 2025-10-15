// src/pages/Services.jsx
import React from "react";
import ServiceCard from "../components/ServiceCard";

// ✅ Import animations
import aiAnimation from "../assets/ai.json";
import devopsAnimation from "../assets/devops.json";
import sapAnimation from "../assets/sap.json";
import trainingAnimation from "../assets/training.json";

const Services = () => {
  const servicesData = [
    {
      title: "AI Solutions",
      description: "We build predictive AI models.",
      animation: aiAnimation,
    },
    {
      title: "DevOps Automation",
      description: "CI/CD pipelines for faster delivery.",
      animation: devopsAnimation,
    },
    {
      title: "SAP BTP",
      description: "Enterprise apps with SAP Build, CAP, and HANA Cloud.",
      animation: sapAnimation,
    },
    {
      title: "Student Training",
      description: "Hands-on coaching on recent technologies.",
      animation: trainingAnimation,
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              animation={service.animation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;