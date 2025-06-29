import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Outlet from './components/Outlet'
import Dashboard from './components/dashboard'
import Login from './components/login'
import Signup from './components/signup'
import Welcome from './components/welcome'
function App() {
  const [count, setCount] = useState(0)
  const token = localStorage.getItem("token");
  return (
    <>
     <div  >
    
     <Navbar token={token}/>
        <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />

        <Route path='/home' element={<Outlet/>} />
        <Route path='/login' element={<Login/> }/>
        <Route path='/signup'element={<Signup/>}/>
        
        </Routes>
        

        
       
      
     
      </div>
    </>
  )
}

export default App
