import React, { useState } from 'react'

function TaskForm() {

  let [isLogin, setIsLogin] = useState("signup")

  let [SignupDatas, setSignupDatas] = useState({})

  function handleSignup(e) {
    let { name, value } = e.target
    setSignupDatas({ ...SignupDatas, [name]: value })
  }
  function SignupSubmit(e) {
    e.preventDefault()
    if (SignupDatas.SignupPass1 != SignupDatas.SignupPass2) {
      alert("entre same password")
      return
    }
    alert(`Welcome back ${SignupDatas.SignupName} , Email : ${SignupDatas.SignupEmail}`)
    setIsLogin("login")
  }

  let [LoginDatas, setLoginDatas] = useState({})
  function handleLogin(e) {
    let { name, value } = e.target
    setLoginDatas({ ...LoginDatas, [name]: value })
  }
  function LoginSubmit(e) {
    e.preventDefault()
    if (SignupDatas.SignupName === LoginDatas.LoginName && SignupDatas.SignupPass1 === LoginDatas.LoginPass) {
      setIsLogin("home")
    } else {
      alert("please entre same details")
      return
    }
  }

  return (
    <>
      {isLogin === "signup" ? (
        <>
          <h1>sign up page</h1>
          <form onSubmit={SignupSubmit}>
            <input type="text" name="SignupName" placeholder="entre you're name" required onChange={handleSignup} /> <br /><br />
            <input type="email" name="SignupEmail" placeholder="entre you're email" required onChange={handleSignup} /><br /><br />
            <input type="password" name="SignupPass1" placeholder="entre you're password" required onChange={handleSignup} /><br /><br />
            <input type="password" name="SignupPass2" placeholder="entre you're password" required onChange={handleSignup} /><br /><br />
            <button type='submit'>sign up</button>
          </form>

        </>
      ) : isLogin === "login" ? (
        <>
          <h1>login page</h1>
          <form onSubmit={LoginSubmit}>
            <input type="text" name="LoginName" placeholder="entre you're name" required onChange={handleLogin} /><br /><br />
            <input type="password" name="LoginPass" placeholder="entre you're password" required onChange={handleLogin} /><br /><br />
            <button type='submit'>login</button>
          </form>
        </>
      ) : isLogin === "home" ? (
        <>
          <h1>home page</h1>
          <h2>Welcome Back {SignupDatas.SignupName}</h2>
          <button onClick={() => setIsLogin("login")}>logout</button>
        </>
      ) : (
        <>loading......</>
      )}
    </>
  );
}


export default TaskForm
