import React from 'react'
import classes from "./TextImage.module.css"
import dir_right from "../../assets/images/dir_right.svg"
function TextImage({img, title, description, buttonText}) {
  return (
    <div className={classes.TextImage}>
        <div className={classes.Left}>
            <h2>{title}</h2>
            <br />
            <p>{description}</p>
            <br />

            <div className={classes.Button}>
                <p>{buttonText}</p> <img src={dir_right} alt="" />
            </div>

        </div>
        <div className={[classes.Right, classes.DesktopOnly].join(" ")}>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default TextImage
