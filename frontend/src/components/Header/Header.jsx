import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../../images/logo.jpg"
import {FaUserAlt} from "react-icons/fa"
const Header = () => {
  return (
    <ReactNavbar
    
    navColor="hsl(0, 0%, 20%)"
    burgerColor="rgb(244, 31, 84)"
    burgerColorHover="hsl(345, 91%, 54%)"
    logo={logo}
    logoHoverColor="hsl(0,0%,20%)"
    nav2justifyContent="space-around"
    nav3justifyContent="space-around"
    link1Text="Home"
    link2Text="About"
    link3Text="Projects"
    link4Text="Contact"
    link1Url="/"
    link2Url="/about"
    link3Url="/project"
    link4Url="/contact"
    link1ColorHover="hsl(345, 91%, 54%)"
    link1Color="white"
    link1Size="1.5rem"
    link1Padding="3vmax"
    profileIcon={true}
    profileIconColor="white"
    profileIconColorHover="hsl(345, 91%, 54%)"
    ProfileIconElement={FaUserAlt}

    />
  )
}

export default Header
