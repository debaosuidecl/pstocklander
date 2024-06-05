import React from 'react'
import classes from "./Nav.module.css"

function Backdrop(props) {
  return (
    <div onClick={props.onClick} className={[classes.Backdrop, classes.MobileOnly].join(" ")}>
      
    </div>
  )
}

export default Backdrop
