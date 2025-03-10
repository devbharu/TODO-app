import { useState } from "react"


export default function Outlet(){

   const [des,setdes] =useState('');
    return(<div className=' w-[70vh] h-screen border border-shawdow-lg border-gray-600 border-rounded-lg'>

        <p>
            Welcome to todo app
        </p>

       <input type='text' className="border-rounder-md "/>
     <input type='checkbox'/>
     
       
    </div>)
    
    
    
}