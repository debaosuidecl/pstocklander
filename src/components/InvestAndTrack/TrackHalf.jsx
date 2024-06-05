import React from 'react'
import classes from "./InvestAndTrack.module.css"
import my_investments from "../../assets/images/Invest_portfolio.svg"
function TrackHalf() {
  return (
    <div className={classes.TrackHalf}>
        <div className={classes.Left}>
        <div className={classes.LeftText}>

            <h2>Track and organize <br/>
            <span style={{color: "#2286FE"}}> your Portfolio.</span></h2>
            <br />
            <p>
            Easily monitor and manage all your real estate investments in one place with our intuitive dashboard, giving you clear insights and control over your portfolio's performance.            </p>
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

export default TrackHalf
