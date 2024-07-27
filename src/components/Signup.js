import React from 'react'
import {useState} from 'react';
import  "./css/signUp.css"
import InputControl from './InputControl';
import {Link,useNavigate} from "react-router-dom"
import {createUserWithEmailAndPassword , updateProfile} from "firebase/auth"
import { auth } from "../firebase"


function Signup({values, setValues}) {
  const navigate = useNavigate();
    
      const [errorMsg, setErrorMsg] = useState("");
      const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
      const handleSubmission = () => {
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth,values.email,values.pass)
        .then(async(res)=>
          {
          setSubmitButtonDisabled(false);
          const user = res.user;
          await  updateProfile(user, {
            displayName: values.name,
          });
           navigate("/");
          })
         
          .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
          });
      }
  return (
    <div className="signBody">
      <img className='img1' src='./img/logo.png' width='60px'/>
        <div className="signContent">
            <h1 className='hh1'>Signup</h1>
            <div className="Inputdiv ii"><InputControl label="Name" placeholder="Enter your name" onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }/></div>
        <div className="Inputdiv"><InputControl label="Email" placeholder="Enter email adress" onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }/></div>
        <div className="Inputdiv"><InputControl label="Password" type="password" placeholder="Enter password" onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }/></div>
          <h5 className="error">{errorMsg}</h5>
        <button className="button" onClick={handleSubmission} disabled={submitButtonDisabled}>Signup</button>
        <h4>Do you have an account?</h4>
        <Link className="logIn" to="/">Login</Link>
        </div>
    </div>
  )

}

export default Signup;
