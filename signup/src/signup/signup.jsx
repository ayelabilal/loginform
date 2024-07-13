import React from 'react'
import style from './signup.module.css'
const Signup = ({clickFunc}) => {

  return (
    <div>

    <div className={style.head}>
    <h2 className={style.sign}>Sign UP</h2>
    <input className={style.names} type="text" placeholder='Name' /><br />
    <br />
    <input className={style.email}  type="text" placeholder='Email' /><br />
    <br />
    <input className={style.pass}  type="text" placeholder='Password' /><br />
    <br />
    <input className={style.con}  type="text" placeholder='Confirm pasword' />
    <br /> 
    <br />
    <input className={style.check} type="checkbox" /> I agree all statement in Terms if service.
    <br />
    <br />
   <button onClick={clickFunc} className={style.btn}>Sign Up</button>
    </div>
    </div>
  )
}

export default Signup
