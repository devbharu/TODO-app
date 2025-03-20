import { useState,useRef } from "react"
import {motion} from 'framer-motion'

export default function Outlet(){
const [todos,setTodo]=useState([{des:"Maths",completed:false,}]);
const [des,setdes] =useState('');
  

function addTodo(){
    if(des.trim()==='')return;
    setTodo([...todos, { des: des, completed: todos.completed }]);
    setdes("");

}


function toggleTodo(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodo(updatedTodos);
}
    

function removeTodo(index){
let updatedTodos=[...todos];
 updatedTodos=updatedTodos.filter((todo,index1)=>
     index!==index1
  
 )
 setTodo(updatedTodos)
 
}


const name="WELCOME TO TODO APP";


 return (<>
 
 <div className=' text-center  text-black flex justify-center items-center h-screen  '>

        <div className='absolute   my-14  h-1/2 w-1/2   '>
                {name.split("").map((char,index)=>(
                    <motion.span className="   relative  text-4xl bottom-35  text-center font-serif font-bold "
                    key={index}
                     initial={{y:100,opacity:0}}
                    animate={{y:-100,opacity:1}}
                    transition={{delay:0.1*index}}
                    >
                        {char}
                             
                    </motion.span>
                ))
               }

                    <div className="flex justify-center m-6">
                            <input className="text-xl border rounded-lg p-2  mx-6 " type='text' onChange={(e)=>{
                                e.preventDefault();
                            setdes(e.target.value)
                            }}   placeholder="enter a new task"></input>

                            <button className=' backdrop-blur-md border text-xl hover:text-white rounded-lg bg-blue-200 hover:bg-blue-600 px-4 py-2  hover:shadow-md  ' onKeyDown={addTodo} onClick={addTodo}>
                                Add todo
                            </button>
                            
                            
                            
                    </div>


              <Card todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}  />
     </div>
       

 </div>
</>)

    
    
    
}




function Card({todos, toggleTodo,removeTodo}){


    return(<>
    
    <div>
               <ul>
                        {todos.map((todo, index) => (
                                <div className="translate-x-5 ">
                                     
                               <li key={index} className=" flex flex-row m-6 " >
                                    <input type='checkbox'  checked={ todo.completed} onChange={()=>toggleTodo(index)} readOnly className="  -my-1 size-6 translate-y-2 mx-2"  ></input>
                                   { todo.completed ? (<>
                                    <div className=" line-through text-xl  ">
                                    {todo.des}
                                    
                                    </div>
                                   </>):(<>

                                   <div className="decoration-none text-xl" >
                                   
                                     {todo.des}
                                     
                                   </div>
                                   </>)
                                   }


                                     <div className="border rounded-md hover:bg-red-400 bg-red-200 text-xl hover:text-white px-4 py-2  fixed translate-x-150  " onClick={()=>removeTodo(index)}>
                                             Remove
                                     </div>
                                </li>

                                </div>
                                
                                
                            ))}
                               
               </ul>
              
                
                    

               
        </div>
    </>)
}



 