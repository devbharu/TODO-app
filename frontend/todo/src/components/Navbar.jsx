
import { useState } from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

export default function Navbar({token}){

    
    const [tog,settog] =useState(false);

return <motion.div className=" bg-gradient-to-l from-blue-400 to-blue-200   py-6  text-xl   flex justify-between  h-[10vh]" 


initial={{x:-100,opacity:0}}
animate={{x:0,opacity:1}}
duration={{duration:4}}

>
     
     <motion.h1 
      className="text-3xl hover:text-black mx-4 font-serif font-bold animate-pulse"
      initial={{ x:-100 ,opacity: 0 ,scale:0}}
      animate={{ x:0,opacity: 1 ,scale:1}}
      transition={{ duration: 1 }} // 1 second fade-in
    >
     {token && <Link to='/'>  Welcome</Link>} 
    </motion.h1>
    <motion.h1 
      className="text-3xl -translate-x-19 hover:text-black font-bold"
      initial={{ y:-100 ,opacity: 0 }}
      animate={{ y:0,opacity: 1 }}
      transition={{ duration: 1 }} // 1 second fade-in
    >
   { token && <Link to='/home'> TODO </Link> }
    </motion.h1>
     
     
     <div className='flex gap-4'>
     <motion.h1 
      className="text-3xl  hover:text-black font-bold"
      initial={{ x:100 ,opacity: 0,scale:0 }}
      animate={{ x:0,opacity: 0.5,scale:1 }}
      transition={{ duration: 1 }}  
    >
      {!token && <Link to='/login'> Login   </Link> }
    </motion.h1>

    <motion.h1 
      className="text-3xl hover:text-black font-bold mx-3"
      initial={{ x:100,opacity: 0,scale:0 }}
      animate={{ x:0,opacity: 0.5,scale:1 }}
      transition={{ duration: 1 }}  
      whileHover={{scale:1.2}}
     
    >
      {!token &&<Link  to='/signup'>
      Sign up
      </Link>}
    </motion.h1>
     </div>
</motion.div>

}