import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './signup/signup'
import Login from './login/login'

function App() {
  const [isloggedIn,setIsLoggedIn] = useState()
   
  const toggle = ()=>{   
    setIsLoggedIn(!isloggedIn)
  }   

  return (   
    <>
    {   
      isloggedIn ?<Login clickFunc={toggle}/>:  <Signup clickFunc={toggle}/>
    }
  
    </>
  )

}

export default App
