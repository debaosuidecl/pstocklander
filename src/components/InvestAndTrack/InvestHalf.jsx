import React from 'react'
import classes from "./InvestAndTrack.module.css"
import my_investments from "../../assets/images/my_investments.svg"
function InvestHalf() {
  return (
    <div className={classes.InvestHalf}>
        <div className={classes.Left}>
        <div className={classes.LeftText}>

            <h2>Invest in <br/>
            <span style={{color: "#2286FE"}}> Property Fractions.</span></h2>
            <br />
            <p>
            Maximize your investment potential by buying fractional shares of prime properties, making it possible to own a part of high-end real estate without the need for full ownership.
            </p>
            <br />
            <br />
        
        </div>
        <br /><br /><br /> <br/>
        <div className={classes.Right}>


            <img src={my_investments} alt="" />
        </div>
     </div>
     <br /><br /><br />

    </div>
  )
}

export default InvestHalf
