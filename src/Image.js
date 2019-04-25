import React from "react"
import bg from './images/bg.jpg'
class Image extends React.Component{
  render(){
    const Background={
      width: "100%",
		height: 'auto'
    }
    return(
      <div>
        <img src= {bg} style={Background} alt="background"/>
      </div>
    )
  }
}
export default Image
