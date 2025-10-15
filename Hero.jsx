import Lottie from "lottie-react";
import aiAnimation from "../assets/ai.json";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to <span className="text-indigo-500">Tesseract CodexLabs</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Empowering businesses and students with AI/ML, Data Science, DevOps, SAP BTP, and other cutting-edge
          technology solutions to drive innovation, efficiency, and growth.
        </p>
      </div>
      <div className="md:w-1/2">
        <Lottie animationData={aiAnimation} loop={true} />
      </div>
    </section>
  );
}