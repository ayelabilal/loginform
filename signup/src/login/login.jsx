import React from 'react'
import style from './login.module.css'
const Login = ({clickFunc}) => {

  return (
    <div>

    <div className={style.head}>
    <h2 className={style.sign}>Login</h2>
    <input className={style.names} type="text" placeholder='Name' /><br />
    <br />
    <input className={style.pass}  type="text" placeholder='Password' /><br />
    <br /> 
    <br />
    <input className={style.check} type="checkbox" /> Remember me
   <br />
    <br />
   <button onClick={clickFunc} className={style.btn}>Login</button>
   
    </div>
    </div>
  )
}

export default Login
