import { useRef } from "react";
import { motion } from "framer-motion";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-blue-200 to-blue-600 h-screen text-black">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center px-16 py-10 border rounded-lg hover:shadow-lg text-xl bg-gradient-to-br from-white to-blue w-lg h-[60vh]"
      >
        <div className="text-center flex-col w-full">
          <div className="font-bold text-2xl mb-6">Sign up</div>

          <div className="text-start">Name</div>
          <input
            type="text"
            className="border rounded-md m-4 py-2 px-4 w-full"
            ref={nameRef}
          />

          <div className="text-start">Email</div>
          <input
            type="text"
            className="border rounded-md m-4 py-2 px-4 w-full"
            ref={emailRef}
          />

          <div className="text-start">Password</div>
          <input
            type="password"
            className="border rounded-md m-4 py-2 px-4 w-full"
            ref={passwordRef}
            onChange={(e) => {
              passwordRef.current.value = e.target.value;
              console.log(passwordRef.current.value);
            }}
          />

          <button className="font-bold px-6 py-2 my-6 hover:bg-white hover:text-black bg-red-300 border rounded-lg">
            Sign up
          </button>
        </div>
      </motion.div>
    </div>
  );
}
