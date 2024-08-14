import React, { useState } from 'react';
import './LoginPop.css';
import { assets } from '../../assets/assets';

const LoginPop = ({setShowLogin}) => {
    
    const[currstate,setcurrstate] = useState("Login")

  return (
    <div className='login-pop'>
       <form className="login-popup-container">
        <div className="login-popup-title">
           <h2>{currstate}</h2>
           
           <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            
        </div>
        <div className="login-popup-inputs">
          {currstate==="Login"?<></>: <input type="text"  placeholder='your name required'/>}

          <input type="email"  placeholder='your email required'/>
          <input type="password"  placeholder='your password required'/>
          
        </div>
        <button className="login-popup-conainer">{currstate==="Sign Up"?"create Account" :"Login"}</button>
           <div className="login-popup-condition">
              <input type="checkbox" required/>
              <p>By Continuing this , i agree to the term condition & policy</p>
           </div>
           {currstate==="Login" ?  <p>Create a new account <span onClick={()=>setcurrstate("Sign Up")}>Click here</span ></p>:  <p>Already Have an account? <span onClick={()=>setcurrstate("Login")}>Login Here </span> </p>
}
       </form>
    </div>
  )
}

export default LoginPop
