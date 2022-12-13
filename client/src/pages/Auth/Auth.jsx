import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useState } from 'react'

const Auth = () => {
  const [isSignUp, setSignUp] = useState(true)
  const [data, setData] = useState({ firstname: "", lastname: "", username: "", password: "", confirmpass: "" })
  const [confirmPass, setConfirmPass] = useState(true)
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if (isSignUp) {
      if (data.password !== data.confirmpass) {
        setConfirmPass(false)
      }
    }
  }


  const resetForm = () => {
    setConfirmPass(true);
    setData({ firstname: "", lastname: "", username: "", password: "", confirmpass: "" })
  }
  return (
    <div className="Auth">

      {/* Left Side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Pic Pilot</h1>
          <h6>Give wings to your snaps</h6>
        </div>
      </div>

      {/* Right Side */}
      <div className="a-right">
        <form action="" className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input type="text" placeholder='First Name' className="infoInput" name='firstname' onChange={handleChange} value={data.firstname}/>
              <input type="text" placeholder='Last Name' className="infoInput" name='lastname' onChange={handleChange} value={data.lastname}/>
            </div>
          )}
          <div>
            <input type="text" placeholder='UserName' className="infoInput" name='username' onChange={handleChange} value={data.username}/>

          </div>
          <div>
            <input type="password" placeholder='Password' className="infoInput" name='password' onChange={handleChange} value={data.password}/>
            {isSignUp && (
              <input type="password" placeholder='Confirm Password' className="infoInput" name='confirmpass' onChange={handleChange} value={data.confirmpass}/>
            )}
          </div>
          <span style={{ display: confirmPass ? "none" : "block", color: 'red', fontSize: '12px', alignSelf: 'flex-end', marginRight: '5px' }}>
            * Confirm password is not same
          </span>
          <div>

            <span style={{ fontSize: '12px', cursor: "pointer" }} onClick={() => {setSignUp((prev) => !prev); resetForm()}}>{isSignUp ? "Already have an account. Login!" : "Don't have an account! Sign Up"}</span>
          </div>
          <button className="button infoButton" type='submit'>{isSignUp ? "Signup" : "Log In"}</button>
        </form>
      </div>


    </div>
  )
}






export default Auth