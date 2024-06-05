import React from 'react'
import classes from "./StartInvestingPrompts.module.css"
import sellwithdrawgiftfriend from "../../assets/images/sellwithdrawgiftfriend.svg"
import Button from '../Button/Button'
function StartInvestingPrompts() {
  return (
    <div className={classes.StartInvestingPrompts}>
            
    <div className={classes.Left}>
        <div className={classes.LeftText}>

            <h2>Buy & Invest in Global <br/>
            <span style={{color: "#2286FE"}}> Real Estate Stocks.</span></h2>
            <br />
            <p>
            Seamlessly purchase shares of high-value properties from around the world, allowing you to diversify your investment portfolio with top-tier real estate assets.
            </p>
            <br />
            <br />
            <div className={classes.Flex}>
                {/* <img src={dandroid} height={60} alt="" />
                <img src={diphone1} height={60}  alt="" /> */}

                <Button>Start Investing</Button>
            </div>
            <br />
            <br />
        </div>
            {/* <img src={sellwithdrawgiftfriend} alt="" /> */}
     </div>

        <div className={classes.Right}>

            <img src={sellwithdrawgiftfriend} alt="" />
        </div>
      
    </div>
  )
}

export default StartInvestingPrompts
