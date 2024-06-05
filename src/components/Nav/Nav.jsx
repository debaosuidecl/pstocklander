import React, { useState } from 'react'
import Logo from "../../assets/images/Logo.Color.svg"
// import downloadlogomobile from "../../assets/images/apple_playstore.svg"
import Download from "../../assets/images/download_button.svg"
import classes from "./Nav.module.css"
import { Link } from 'react-router-dom'
import DropDownMenu from './DropDownMenu'
import Backdrop from './Backdrop'
function Nav(props) {
  const [showDropDown, setShowDropDown] = useState(false)
  return (
    <nav style={{
      backgroundColor: props.background
    }}>

        { showDropDown && <Backdrop onClick={()=> setShowDropDown(false)}/>}
      <div  style={{position: "fixed"}} className={showDropDown?[classes.show, classes.DropDownCover, classes.MobileOnly].join(" "): [classes.hide, classes.DropDownCover].join(" ")}>
        <DropDownMenu/>
      </div>
      <div 
      onClick={()=>{
        window.location.href = "/"
      }} className={classes.Logo} style={{
        cursor: "pointer"
      }}>
        <img src={Logo} height={47} alt="" />
      </div>
      <ul className={classes.DesktopOnly}>
        <li><Link style={{
          color: window.location.href.includes("discover")? "#2286fe": "#1d3354"
        }}  to="/discover">Discover</Link> </li>
        <li><Link
        style={{
          color: window.location.href.includes("about")? "#2286fe": "#1d3354"
        }}
        to="/about">About</Link> </li>
        <li><Link 
        style={{
          color: window.location.href.includes("faqs")? "#2286fe": "#1d3354"
        }}
        
        to="/faqs">FAQs</Link> </li>
        <li><Link 
        style={{
          color: window.location.href.includes("contact")? "#2286fe": "#1d3354"
        }}
        to="/contact">Contact</Link> </li>
      </ul>

      <img style={{
        cursor: "pointer"
      }} className={classes.DesktopOnly} src={Download} alt="" />

        <div onClick={()=> setShowDropDown(p=>!p)} className={[classes.MobileOnly, classes.burger].join(" ")}>
          {/* <img src={downloadlogomobile} alt="" /> */}
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
  )
}

export default Nav
