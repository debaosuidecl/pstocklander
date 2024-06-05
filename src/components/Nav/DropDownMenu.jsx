import React from 'react'
import classes from "./Nav.module.css"
import { Link } from 'react-router-dom'
import Logo from "../../assets/images/Logo.Color.svg"


function DropDownMenu() {
  return (
    <div className={classes.DropDownMenu}>
        <br /><br/>
              <div className={classes.Logo}>
        <img src={Logo} height={47} alt="" />
      </div>
      <br /><br /><br /><br />
         <li><Link  
         style={{
            color: window.location.href.includes("discover")? "#2286fe": "#1d3354"
          }}
         to="/discover">Discover</Link> </li>
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
   
    </div>
  )
}

export default DropDownMenu
