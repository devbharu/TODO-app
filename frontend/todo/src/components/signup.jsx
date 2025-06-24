import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios';
export default function Signup() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
   const [arr,setarr]  = useState([]);  
  
     async function pushdata(){
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
         const username = nameRef.current.value;
         const email = emailRef.current.value
         const password = passwordRef.current.value;

        const data  =  await axios.post('http://localhost:3009/signup',{
           username,
           email,
           password

        })
           
            
         

         console.log(`${data} this the data came`);
           



     }

       async function fetchdata(){
              const response = axios.get("http://localhost:3010/getdata");
              setarr(response.data);
       }


     useEffect(function(){

      fetchdata();


     },[])







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
             
          />



          <button onClick={pushdata} className="font-bold px-6 py-2 my-6 hover:bg-white hover:text-black bg-red-300 border rounded-lg">
            Sign up
          </button>
           

          {Array.isArray(arr) && arr.map((data, index) => (
  <li key={index}>
    {data.username} — {data.email}
  </li>
))}







        </div>
      </motion.div>
    </div>
  );
}
