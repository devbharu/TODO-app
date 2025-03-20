import {motion} from "framer-motion"


export default function () {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray to-gray-600 text-black px-6">
        
        {/* Heading Section */}
        <motion.div className="text-center mb-6"
        initial={{y:100,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:1,delay:0.5}}
        >
          <h1 className="text-5xl font-extrabold">
            Welcome to <span className="text-blue-700">DEV BHARU's</span> Todo App
          </h1>
        </motion.div>
  
        {/* Info Card Section */}
        <motion.div className="max-w-lg bg-gray-400 hover:shadow-lg rounded-2xl p-8 text-center border border-gray-200"
        initial={{y:100,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:1,delay:1}}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Stay Organized & Boost Productivity 🚀
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Manage tasks efficiently with our intuitive Todo App. Whether you're 
            planning your day, working on a project, or setting reminders, 
            we’ve got you covered.
          </p>
  
          {/* Feature List */}
          <ul className="text-left mt-6 space-y-3">
            <li className="flex items-center text-lg">
              ✅ <span className="ml-3">Add new tasks effortlessly</span>
            </li>
            <li className="flex items-center text-lg">
              ✅ <span className="ml-3">Mark tasks as complete to track progress</span>
            </li>
            <li className="flex items-center text-lg">
              ✅ <span className="ml-3">Stay focused with an easy-to-use interface</span>
            </li>
          </ul>
  
          {/* CTA Button */}
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all">
            Start Organizing Now
          </button>
        </motion.div>
      </div>
    );
  }
  