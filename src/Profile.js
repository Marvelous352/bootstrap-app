import React from "react"
import profile from './images/profile.jpg'


class Profile extends React.Component{
  render(){
    const profileStyle ={
      borderRadius: '50%',
      textAlign:'center',
      marginTop: '-150px'
    }
    return(
      <div style={{textAlign:'center'}}>
        <img src={profile} style={profileStyle} alt="john" className="margin"/>
        <p style={{textAlign:"center"}}>JOHN DOE</p>
  			<p style={{textAlign:"center"}}>Project Manager at Alabian Solutions Limited</p>
  			<p style={{textAlign:"center"}}>Email: info@alabiansolutions.com, Phone:08157550744</p>

      </div>

    )
  }
}
export default Profile
