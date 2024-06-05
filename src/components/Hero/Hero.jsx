import React from 'react'
import classes from "./Hero.module.css"
import phone from "../../assets/images/iphone15.svg"
import dandroid from "../../assets/images/dandroid1.svg"
import diphone1 from "../../assets/images/diphone1.svg"

function Hero() {
  return (
    <div className={classes.HeroCover}>

    <div className={classes.Hero}>
      <div className={classes.Left}>
        <div className={classes.LeftText}>

        <h2>Simplify Your Journey to Property <span style={{color: "#2286FE"}}>Ownership.</span></h2>
        <br />
        <p>Our user-friendly platform allows you to explore properties worldwide and invest according to your budget through our unique fractional ownership model, making international property investment simple and rewarding.</p>
        <br />
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

export default Hero
