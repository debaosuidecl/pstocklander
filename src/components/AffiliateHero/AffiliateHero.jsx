import React from 'react'
import classes from "./AffiliateHero.module.css"
import phone from "../../assets/images/bizman.png"
import dandroid from "../../assets/images/dandroid1.svg"
import diphone1 from "../../assets/images/diphone1.svg"

function AffiliateHero() {
  return (
    <div className={classes.HeroCover}>

    <div className={classes.Hero}>
      <div className={classes.Left}>
        <div className={classes.LeftText}>

        <h2>Earn more through <br/> our <span style={{color: "#2286FE"}}>Affiliate Programs</span></h2>
        <br />
        <p>
            
        Join our affiliate program to earn commissions by promoting Propstock, and help others discover the benefits of fractional real estate investment while growing your income.
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

export default AffiliateHero
