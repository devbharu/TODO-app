export default function Signup(){


    return(<div className='  flex justify-center  items-center  bg-gray-100    h-screen'>
         
        <div className=" flex relative bottom-25  justify-center  items-center px-16  py-10   border rounded-lg hover:shadow-lg text-xl text-white bg-gradient-to-r from-blue-500 to-purple-600   w-lg  h-[60]vh  ">
          <div className="text-center flex-col  ">
                    <div className="font-bold text-2xl" >
                    Sign up
                    </div>

                    <div className="text-start">Name</div>

                    <input type="text" className= " border rounded-md  m-4  py-2  px-4 "/>

                    <div className="text-start">Email</div>

                    <input type="text" className= " border rounded-md  m-4  py-2  px-4 "/>

                    <div className="text-start">Password</div>

                    <input type='text' className="border rounded-md px-4 m-4  py-2 "/>

                    <div>
                     <button className=" font-bold  px-6 py-2  my-6 hover:bg-white hover:text-black bg-red-300 border rounded-lg  ">Sign up</button>
                     </div>
            </div>
                    
                   
         
          
        </div>


    </div>)
}