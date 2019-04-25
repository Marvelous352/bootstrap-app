import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
import './Style.css'

class Download extends React.Component{
  render(){
    return(
      <div className="Download">
        <h1>Download</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
          <Button variant="success">Download</Button>


      </div>

    )
  }
}
export default Download
