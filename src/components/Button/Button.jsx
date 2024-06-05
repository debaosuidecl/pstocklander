import React from 'react'
import direction_right from "../../assets/images/direction_right.svg";
import classes from "./Button.module.css"
function Button(props) {
  return (
    <div className={classes.Button} onClick={props.onClick}>
      <p>{props.children}</p>
        <img src={direction_right} alt="" />
    </div>
  )
}

export default Button
