import React from 'react'
import "./About.css"
import { Typography } from "@mui/material"
import MyImage from "../../images/logo.jpg"
const About = ({ about }) => {
  return (
    <div className='About'>
      <div className="AboutContainer">
        <Typography>
          {about.quote}
        </Typography>
      </div>
      <div className="AboutContainer2">
        <div>
          <img src={about.avatar.url} alt="My Imaage" className='AboutAvatar' />
          <Typography variant="h4" style={{ margin: "1vmax 0", color: "black" }}>{about.name}</Typography>
          <Typography>{about.tittle} </Typography>
          <Typography style={{ margin: "1vmax 0" }}>{about.subtittle} </Typography>
        </div>
        <div>
          <Typography style={{ wordSpacing: "5px", lineHeight: "50px", letterSpacing: "5px", textAlign: "right" }}>
            {about.description}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default About;
