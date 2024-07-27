import React from 'react'
import { Link } from 'react-router-dom'
import "./css/home.css"
import FileUploadComponent from './FileUploadComponent';


function Home({ userName, values, setValues, name}) {
  return (
    <div>
      <header className="header">
        <div className="Useroptions">

        {/* <h2>{name ? `Welcome - ${userName} ` : `Welcome - ${values.name}`}</h2> */}
        <div className='profile'>
          <div className='icon'>
            <ion-icon name="person-circle-outline"></ion-icon>
          </div>
          <div className='name'>
            {name ? `${userName} ` : `${values.name}`}
          </div>
        </div>
        </div>
        <div className="OutPro">
           <h1> 
           <Link className='Link' to="/">Logout</Link>
        </h1>
        <h1> 
           <Link className='Link' to="/profile">Edit</Link>
        </h1>
        </div>
         
        
        
      
        
      </header>
      <body className="body">
         <FileUploadComponent />
         </body>
    </div>
  )
}

export default Home
