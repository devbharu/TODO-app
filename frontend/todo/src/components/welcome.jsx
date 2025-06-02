import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className=" relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue to-blue-600 text-black px-4 sm:px-6">
      {/* Heading Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="  absolute top-10 left-0 right-0 text-3xl sm:text-5xl font-extrabold">
          Welcome to <span className="text-blue-700 font-WDXL">DEV BHARU's</span><br></br> Todo App
        </h1>
      </motion.div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-center items-center">
        <FeatureCard
          title="Target"
          description="Define your daily, weekly, and monthly goals. Stay focused and motivated by setting meaningful objectives."
          videoUrl="https://cdn-icons-mp4.flaticon.com/512/6172/6172513.mp4"
          delay={0.5}
        />
        <FeatureCard
          title="Calendar"
          description="Visualize your tasks and events using an integrated calendar view. Keep track of deadlines effortlessly."
          videoUrl="https://cdn-icons-mp4.flaticon.com/512/6416/6416392.mp4"
          delay={1}
        />
        <FeatureCard
          title="Mark Todos"
          description="Easily check off completed tasks and maintain a clear record of your productivity journey."
          videoUrl="https://cdn-icons-mp4.flaticon.com/512/6172/6172541.mp4"
          delay={2}
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description, videoUrl, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 25 }}
      transition={{ duration: 0.8, delay }}
      className="font-serif bg-white text-black rounded-lg px-6 sm:px-8 py-6 text-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition duration-300 w-80 h-[300px] flex flex-col justify-between"
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

        <h2 className="text-base font-light font-popins leading-relaxed">
          {description}
        </h2>
      </div>
    </motion.div>
  );
}

