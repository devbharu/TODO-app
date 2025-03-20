import { useState,useRef } from "react"


export default function Outlet(){
const [todos,setTodo]=useState([{des:"hi there",completed:false,}]);
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





 return (<>
 
 <div className='   text-black flex justify-center h-screen  '>

        <div className=' my-14  h-1/2 w-1/2   '>
                <div className="  text-4xl  text-center font-serif font-bold ">
                      WELCOME TO TODO APP   
                </div> 

                    <div className="flex justify-center m-6">
                            <input className="text-xl border rounded-lg p-2  mx-6 " type='text' onChange={(e)=>{
                                e.preventDefault();
                            setdes(e.target.value)
                            }}   placeholder="enter a new task"></input>

                            <button className=' backdrop-blur-md border text-xl hover:text-white rounded-lg bg-blue-200 hover:bg-blue-600 px-4 py-2  hover:shadow-md  ' onKeyDown={addTodo} onClick={addTodo}>
                                add todo
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
                                <div className="translate-x-25 ">
                                     
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
                                             remove
                                     </div>
                                </li>

                                </div>
                                
                                
                            ))}
                               
               </ul>
              
                
                    

               
        </div>
    </>)
}



 