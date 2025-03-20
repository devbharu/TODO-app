import { useRef, useState } from "react"



export default function Signup(){

   let nameref=useRef();
   let email=useRef();
   let password=useRef();
   let name=useRef();
    
    return(<div className='  flex justify-center  items-center  bg-gray-100    h-screen'>
         
        <div className=" flex relative bottom-25  justify-center  items-center px-16  py-10   border rounded-lg hover:shadow-lg text-xl bg-gradient-to-br from-gray to-gray-600 text-black   w-lg  h-[60]vh  ">
          <div className="text-center flex-col  ">
                    <div className="font-bold text-2xl" >
                    Sign up
                    </div>

                    <div className="text-start">Name</div>

                    <input type="text" className= " border rounded-md  m-4  py-2  px-4 " onKeyDownCapture={()=>{name.current.focus()}} onChange={(e)=>nameref.current=e.target.value}/>

                    <div className="text-start">Email</div>

                    <input type="text" className= " border rounded-md  m-4  py-2  px-4 " ref={name} onChange={(e)=>email.current=e.target.value} />

                    <div className="text-start">Password</div>

                    <input type='text' className="border rounded-md px-4 m-4  py-2 " onChange={(e)=>{password.current=e.target.value
                      console.log(password.current)
                    }

                    }/>

                    <div>
                     <button className=" font-bold  px-6 py-2  my-6 hover:bg-white hover:text-black bg-red-300 border rounded-lg  ">Sign up</button>
                     </div>
            </div>
                    
                   
         
          
        </div>


    </div>)
}