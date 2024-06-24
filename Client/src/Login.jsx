import React from 'react'
import '../src/Login_page.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


function Login() {
  const  navigate = useNavigate()
  const [email, setEmail]=useState('')
  const [password, setPassword] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3003/login',{email,password})
    .then(result=>{console.log(result)
    if(result.data==="success"){
      navigate('/home')
    }
    else if(result.data==="NO RECORD EXIST")
      alert("NO RECORD EXIST")
    else if(result.data==="Your Password is Incorrect")
      alert("Incorrect Password")
    })
    .catch(err=>console.log(err))
  }
  return (
    <>
    <div>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
                <input type="email" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="remember-forgot">
                <Link>Forgot Password</Link>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="register-link">
              <p>Don't have an account?<Link to="/register"> Register</Link></p>
            </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default Login
