import React from 'react'
import './Login.css'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {
  const [ username, setUsername] = useState('')
  const [ password, setPassword] = useState('')
  const [ role, setRole] = useState('user')
  axios.defaults.withCredentials = true;

  const handleSubmit = async() => {
    try{
      const data=await axios.post(`http://localhost:4000/auth/login`,{username,password,role})
      console.log("data>>>>>>>",data)
    }catch(err){
   console.log("error>>>",err)
    }
  }

   
  

  return (
    <div className='loogin-pages'>
      <div className="login-container">
        <h2 className='login'>Login</h2><br/>
        <div className="form-group">
          <label htmlFor="username" className='label'>Username</label>
          <input className='A1' type='text' placeholder='Enter Your Username'
          onChange={(e)=> setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password" className='label'>Password</label>
          <input type='text' placeholder='Enter Your Password' className='A1'
          onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="role" className='label' >Role</label>
         <select name="role" id="role" className='label'
         onChange={(e)=> setRole(e.target.value)}>
          <option value="admin" className=''>Admin</option>
          <option value="user" className=''>User</option>
         </select>
        </div>
        <button className='button' onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login