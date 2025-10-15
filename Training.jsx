import Lottie from "lottie-react";
import trainingAnimation from "../assets/training.json";

export default function Training() {
  return (
    <section id="training" className="px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Training Programs</h2>
      <div className="flex flex-col items-center text-center">
        <Lottie animationData={trainingAnimation} loop={true} className="h-56" />
        <p className="max-w-xl text-gray-600 dark:text-gray-300 mt-6">
          We provide hands-on training in AI/ML, DevOps, Data Science, and SAP BTP,
          preparing students and professionals for real-world challenges.
        </p>
      </div>
    </section>
  );
}