import React, { useState } from 'react'
import '../src/Register_page.css'
import {Link, useNavigate} from 'react-router-dom'
 import axios from 'axios'

function Register() {
  const [name,setName]= useState()
  const [email,setEmail]= useState()
  const [password,setPassword]= useState()
  const navigate = useNavigate()
  
const handlesubmit=(e)=>{
e.preventDefault()
  axios.post('http://localhost:3003/register', {name,email, password})
  .then((response)=> console.log(response))
  .catch(err=>console.log(err))
  navigate('/login')

}

  return (
    <>
      <div>
        <div className="wrapper-register">
          <form onSubmit={handlesubmit }>
            <header>
              <h1>Register</h1>
            </header>
            <div className="input-box">
              <input type="text" placeholder="Username" required onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn">Register</button>
            <div className="login-link">
              <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
