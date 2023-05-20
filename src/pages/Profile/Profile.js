import React from 'react'
// import './Profile.css';
import Bio from './Bio';
// import Skills from './Skills';
import Links from './Links';
import Myprops from './Myprops';

function Profile(props) {
    // console.log('Profile:' ,props)
  
  
    return (
 <div className="App">
       <div className="Container"> <h2>My Profile</h2>
    <Bio></Bio>
    {/* <Skills></Skills> */}
    <Links></Links>
    </div>
    <div className="names">
        <h3 style={{ marginTop:'60px' }}>List of programmers</h3>
           {/* <p>Mr. X</p> 
           <Skills></Skills>
           <p>Mr. Y</p>
           <Skills></Skills> */}

           <Myprops name='Mr. Himel'></Myprops>
           <Myprops name='Mr. Afnan'></Myprops>
           <Myprops name='Mrs. Himel'></Myprops>
    
    
    
    </div>
 </div>
  )
}

export default Profile