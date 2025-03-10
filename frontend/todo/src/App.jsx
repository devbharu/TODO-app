import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Outlet from './components/Outlet'
import Dashboard from './components/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=' h-screen '>
    
     <Navbar/>
        <Routes>
         
        <Route path='/dashboard' element={<Dashboard/>} />

         

        </Routes>
        

        
       
      
     
      </div>
    </>
  )
}

export default App
