import React from 'react'
import classes from "./OwnFractionHero.module.css"
import phone from "../../assets/images/officeworker1.png"
import dandroid from "../../assets/images/dandroid1.svg"
import diphone1 from "../../assets/images/diphone1.svg"

function OwnFractionHero() {
  return (
    <div className={classes.HeroCover}>

    <div className={classes.Hero}>
      <div className={classes.Left}>
        <div className={classes.LeftText}>

        <h2>Why Choose Propstock <br/>  for your  <span style={{color: "#2286FE"}}>Real Estate</span><br /> Investments?</h2>
        <br />
        <p>
            
        Discover the benefits of investing with Propstock and see why we are the preferred platform for savvy real estate investors.</p>        <br />
        <br />
        <div className={classes.Flex}>
            <img src={dandroid} height={60} alt="" />
            <img src={diphone1} height={60}  alt="" />
        </div>
        </div>


      </div>
      <div className={[classes.Right, classes.DesktopOnly].join(" ")}>
        <div className={classes.BlueShape}></div>
        <img className={classes.Phone} src={phone} height={500} alt="" />
      </div>
    </div>
    </div>
  )
}

export default OwnFractionHero
