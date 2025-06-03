export default function Login(){


    return(<div className='  flex justify-center items-center  bg-gradient-to-br from-blue-200 to-blue-600     h-screen'>
         
        <div className=" flex relative bottom-25   justify-center  items-center px-16  py-10   border rounded-lg hover:shadow-lg text-xl    bg-gradient-to-br from-white to-blue text-blue   w-lg  h-[60]vh  ">
          <div className="text-center flex-col   ">
                    <div className="font-bold text-2xl" >
                          Login
                    </div>
 

                    <div className="text-start">Email</div>

                    <input type="text" className= " border rounded-md  m-4  py-2  px-4 "/>

                    <div className="text-start">Password</div>

                    <input type='text' className="border rounded-md px-4 m-4  py-2 "/>

                    <div>
                     <button className=" font-bold  px-6 py-2  my-6 hover:bg-white hover:text-black bg-blue-300 border rounded-lg  ">login</button>
                     </div>
            </div>
                    
                   
         
          
        </div>


    </div>)
}