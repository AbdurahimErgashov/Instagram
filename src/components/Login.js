import React, { useState } from 'react'
import "./css/login.css"
import InputControl from './InputControl';
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"


function Login() {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/home");
      })

      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  }


  return (
    <div className='logInbody'>
      <img className='img' src='./img/logo.png' width='60px'/>
      <div className="logIncontent">
        <h1 className='h1'>Login</h1>
        <div className="Inputdiv i"><InputControl label="Email" placeholder="Enter email adress" onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))
        } /></div>
        <div><InputControl label="Password" type="password" placeholder="Enter password" onChange={(event) =>
          setValues((prev) => ({ ...prev, pass: event.target.value }))
        } /></div>
        <b className="error">{errorMsg}</b>
        <br></br>
        <br></br>
        <button className="button" onClick={handleSubmission} disabled={submitButtonDisabled}>Login</button>
        <h4 className='h4'>Don't have an account?</h4>
        <Link className="signUp" to="/signup">Signup</Link>
      </div>
    </div>
  )
}

export default Login;
