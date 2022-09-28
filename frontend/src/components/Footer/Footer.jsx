import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import React from 'react'
import "./Footer.css"
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"
const Footer = () => {
    return (
        <div className='Footer'>
            <div>
                <Typography variant="h5">About Me</Typography>
                <Typography>
                    Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScrip
                </Typography>

                <Link to="/contact" className='footerContactBtn'>
                    <Typography>Contact us</Typography> 
                </Link>
            </div>
            <div>
                <Typography variant="h6">Social Media</Typography>
                <a href="#" target="blank">
                    <BsGithub />
                </a>
                <a href="#" target="blank">
                    <BsInstagram />
                </a>
                <a href="#" target="blank">
                    <BsLinkedin />
                </a>
            </div>

        </div>
    )
}

export default Footer
