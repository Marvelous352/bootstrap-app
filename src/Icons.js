import React from "react"
import fb from './images/fb.png'
import tw from './images/tw.png'
 import instagram from './images/instagram.jpg'

class Icons extends React.Component{
  render(){
    const iconsStyle ={
      borderRadius: '50%',
      textAlign:'center'

    }
    return(
      <div style={iconsStyle}>
        <img src={fb} alt="facebook-icon" style={iconsStyle}/>
       <img src={tw}  alt="twitter-icon" style={iconsStyle}/>
       <img src={instagram}  alt="instagram-icon" style={iconsStyle}/>


      </div>
    )
  }
}
export default Icons
