import React from 'react'
import classes from "./WhyChoosePropstock.module.css"
import my_investments from "../../assets/images/my_investments.svg"
import Button from '../Button/Button'
function InitialTile() {
  return (
    <div className={classes.InitialTile}>
        <div className={classes.Left}>
        <div className={classes.LeftText}>

            <h2>Why Choose Propstock</h2>
            <br />
            <p>
            At Propstock, we redefine the real estate investment experience by offering a global platform that provides access to prime properties worldwide. Our innovative fractional ownership model allows you to invest in high-value real estate without the need for full ownership, making diversification easy and affordable            </p>
            <br />
            <br />
            <Button>Start Investing</Button>

        </div>
     </div>

    </div>
  )
}

export default InitialTile
