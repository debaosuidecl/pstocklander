import React from 'react'
import classes from "./AboutUsImage.module.css"
import aboutusimage from "../../assets/images/aboutusimage.png"

function AboutUsImage() {
  return (
   <div className={classes.AboutUsImage}><img src={aboutusimage}  alt="" /></div>
  )
}

export default AboutUsImage
