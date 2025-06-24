import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);

  const styles = useSpring({
    from: { transform: "translateX(0%)" },
    to: { transform: "translateX(-50%)" },
    reset: false,
    reverse: false,
    loop: true,
    config: { duration: 20000 },
    pause: isHovered,
      
  });
  
   

  const cards = [
    {
      title: "Target",
      description:
        "Define your daily, weekly, and monthly goals. Stay focused and motivated by setting meaningful objectives.",
      videoUrl: "https://cdn-icons-mp4.flaticon.com/512/6172/6172513.mp4",
    },
    {
      title: "Calendar",
      description:
        "Visualize your tasks and events using an integrated calendar view. Keep track of deadlines effortlessly.",
      videoUrl: "https://cdn-icons-mp4.flaticon.com/512/6416/6416392.mp4",
    },
    {
      title: "Mark Todos",
      description:
        "Easily check off completed tasks and maintain a clear record of your productivity journey.",
      videoUrl: "https://cdn-icons-mp4.flaticon.com/512/6172/6172541.mp4",
    },
  ];

  // Duplicate cards for seamless scroll
  const duplicatedCards = [...cards, ...cards];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue to-blue-600 text-black px-4 sm:px-6">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold">
          Welcome to{" "}
          <span className="text-blue-700 font-WDXL">DEV BHARU's</span>
          <br /> Todo App
        </h1>
      </div>

      {/* Scrolling Feature Cards with fade edges */}
      <div
        className="w-full overflow-hidden max-w-6xl py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <animated.div style={styles} className="flex gap-8 w-max">
          {duplicatedCards.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
              videoUrl={card.videoUrl}
            />
          ))}
        </animated.div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, videoUrl }) {
  return (
    <div
      className="font-serif bg-white text-black rounded-lg px-6 sm:px-8 py-6 text-center shadow-lg shadow-blue-500/30 
                 hover:shadow-blue-500/50 transition-all duration-500 ease-out 
                 w-80 h-[300px] flex flex-col justify-between 
                 transform hover:-translate-y-2 hover:opacity-100 opacity-90"
    >
      <div>
        <h1 className="font-extrabold text-2xl mb-4">{title}</h1>
        <div className="flex justify-center mb-4">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={videoUrl}
            className="w-20 h-20 object-contain"
          />
        </div>
        <h2 className="text-base  font-serif leading-relaxed">{description}</h2>
      </div>
    </div>
  );
}

