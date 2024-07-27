import React, { useState } from 'react';
import "./css/profile.css"
import { Link } from 'react-router-dom'

function Profile({ setUserName, setName}) {
  const [newName, setNewName] = useState('');

  const handleChangeName = () => {
    setUserName(newName);
    setName(true)
  };
  const oldName = () =>{
      setName(true)
      
  }
  return (
    <div>
      <header className="header">
        <h1>Edit profile name</h1>
        <h1><Link className="Homelink" to="/home" onClick={oldName}>Cancel</Link></h1>
      </header>
      <div className='bigBody'>
        <div className="profileBody">
          <h1 className="newName">Set new name for your instagram profile</h1>
          <input className="input " value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='Set a new name'></input>
          <Link to="/home"><button className="change" type='submit' onClick={handleChangeName}>Ok</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Profile