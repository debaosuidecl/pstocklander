import React from 'react'
import classes from "./DiscoverHero.module.css"
import phone from "../../assets/images/phone_discover.png"
import dandroid from "../../assets/images/dandroid1.svg"
import diphone1 from "../../assets/images/diphone1.svg"

function Discover() {
  return (
    <div className={classes.HeroCover}>

    <div className={classes.Hero}>
      <div className={classes.Left}>
        <div className={classes.LeftText}>

        <h2>Boost your Portfolio <br/> with <span style={{color: "#2286FE"}}>Real Estate Stocks</span></h2>
        <br />
        <p>
            
        Unlock the potential of global real estate markets with fractional ownership, enabling you to invest in high-value properties worldwide with lower capital and diversified risk.

        </p>
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

export default Discover
