import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const name = useRef(null);
  const pass = useRef(null);
  const navigate = useNavigate();

   

  async function getdata() {
    const username = name.current.value;
    const password = pass.current.value;

    console.log(username);
    console.log(password);
     
         
    const response = await axios.post(`http://localhost:4001/api/auth/signin/${username}`)
     const token = response.data.token;

    localStorage.setItem("token",token);
    localStorage.setItem("username",username);
      
    if (token) {
      toast.success("You are signed in!",{
        onClose:()=>(navigate("/home"))
      });
          
         
    } else {
      toast.error("Invalid username or password");
    }
  }

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-blue-200 to-blue-600 h-screen">
      <div className="flex flex-col justify-center items-center px-16 py-10 border rounded-lg hover:shadow-lg text-xl bg-gradient-to-br from-white to-blue-100 text-blue-900 w-[400px] h-[60vh]">
        <div className="font-bold text-2xl mb-4">Login</div>

        <div className="w-full text-start">Username</div>
        <input
          type="text"
          ref={name}
          className="border rounded-md w-full my-2 py-2 px-4"
        />

        <div className="w-full text-start">Password</div>
        <input
          type="password"
          ref={pass}
          className="border rounded-md w-full my-2 py-2 px-4"
        />

        <button
          className="font-bold px-6 py-2 my-6 hover:bg-white hover:text-black bg-blue-300 border rounded-lg"
          onClick={getdata}
        >
          Login
        </button>

        {/* Toast Container */}
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
}
