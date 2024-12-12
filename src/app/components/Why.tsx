// pages/why-choose-us.js
"use client";
import { useInView } from "react-intersection-observer";
import { MotionDiv, MotionH2 } from "../framer-motio";
import { useState } from "react";
const WhyChooseUs = () => {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    // Unified animation variants
    const scaleVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    const [activeStep, setActiveStep] = useState(2); // Default to "Prototyping"

  const steps = [
    { title: "Elicitation", description: "", position: { x: "0%", y: "85%" } },
    { title: "Forethinking", description: "", position: { x: "20%", y: "40%" } },
    {
      title: "Prototyping",
      description:
        "Visualizing the substance of the product concept, as well as the target audience and includes wireframes, style guides, and mock-ups.",
      position: { x: "40%", y: "50%" },
    },
    { title: "Evolution", description: "", position: { x: "60%", y: "30%" } },
    { title: "Testing & Integration", description: "", position: { x: "75%", y: "40%" } },
    { title: "Deployment", description: "", position: { x: "90%", y: "20%" } },
    { title: "Support & Maintenance", description: "", position: { x: "100%", y: "10%" } },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-10">How we work</h1>
      <div className="relative w-11/12 max-w-4xl">
        {/* Curved Line */}
        <svg
          className="absolute w-full h-48 top-0 left-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 200"
          fill="none"
          stroke="#9ca3af"
        >
          <path
            d="M 0,180 C 150,60 350,40 500,100 C 650,160 850,140 1000,70"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className="absolute text-center"
            style={{
              left: step.position.x,
              top: step.position.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Dot */}
            <div
              className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-transform duration-300 ${
                activeStep === index
                  ? "bg-black border-black scale-110"
                  : "bg-white border-gray-400"
              }`}
              onClick={() => setActiveStep(index)}
            ></div>
            {/* Label */}
            <p
              className={`mt-2 text-sm ${
                activeStep === index
                  ? "font-bold text-black"
                  : "text-gray-500"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>

      {/* Description Box */}
      {steps[activeStep].description && (
        <div className="mt-10 p-5 bg-black text-white rounded-lg shadow-lg max-w-lg transition-all duration-300">
          <p className="text-lg font-semibold">{steps[activeStep].title}</p>
          <p className="mt-2 text-sm">{steps[activeStep].description}</p>
        </div>
      )}
    </div>
    )
};

export default WhyChooseUs;