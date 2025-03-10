import { useState } from "react"


export default function Outlet(){

   const [des,setdes] =useState('');
    return(<div className=' w-[70vh] m-auto h-screen border border-shawdow-lg border-gray-600 border-rounded-lg'>

        <p className='text-4xl sans-serif'>
            Welcome to todo app
        </p>

       <input type='text' className="aligh-center border border-rounder-md "/>
     <input type='checkbox'/>
     
       
    </div>)
    
    
    
}