import React from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/Userpage'
import {useEffect,useState} from 'react'
import {auth} from "./firebase"
import Profile from './components/Profile';

function App() {

  const [userName, setUserName] = useState("");
  const [name , setName] = useState(true)
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return <div className='App'>
    <Router >
      <Routes>
        <Route path='/home' element={<Home userName={userName} values={values}  name={name} setName={setName}/>}/>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup values={values} setValues={setValues}/>} />
        <Route path='/user' element={<User />} />
        <Route path="/profile" element={<Profile setUserName={setUserName} values={values} setName={setName}/>} />
      </Routes>
    </Router>
  </div>;
  
}

export default App;
