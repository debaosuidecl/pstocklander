import React from 'react'
import classes from "./AssetTrackerHero.module.css"
import phone from "../../assets/images/phone7.png"
import dandroid from "../../assets/images/dandroid1.svg"
import diphone1 from "../../assets/images/diphone1.svg"

function AssetTrackerHero() {
  return (
    <div className={classes.HeroCover}>

    <div className={classes.Hero}>
      <div className={classes.Left}>
        <div className={classes.LeftText}>

        <h2>Steamline your <br/> Investments with  <span style={{color: "#2286FE"}}>Asset Trackers.</span></h2>
        <br />
        <p>
            
        Efficiently manage and monitor your real estate investments with Propstock’s comprehensive asset tracking tools.        </p>
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

export default AssetTrackerHero
