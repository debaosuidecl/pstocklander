import React from 'react'
import classes from "./AffiliatePrograms.module.css"
import girl_with_phone from "../../assets/images/girl_with_phone.png"
import Button from '../Button/Button'
function AffiliatePrograms() {
  return (
    <div className={classes.AffiliatePrograms}>
            
    <div className={classes.Left}>
        <div className={classes.LeftText}>

            <h2>Earn more through<br/>
            our <span style={{color: "#2286FE"}}> Affiliate Programs.</span></h2>
            <br />
            <p>
            Our affiliate program allows you to earn more by bringing you before an  international audience, thereby allowing you to reach more prospect and ultimately close faster on sales.            </p>
            <br />
            <br />
            <div className={classes.Flex}>
                {/* <img src={dandroid} height={60} alt="" />
                <img src={diphone1} height={60}  alt="" /> */}

                <Button>Get started now</Button>
            </div>
            <br />
            <br />
        </div>
            {/* <img src={girl_with_phone} alt="" /> */}
     </div>

        <div className={classes.Right}>

            <img src={girl_with_phone} alt="" />
        </div>
      
    </div>
  )
}

export default AffiliatePrograms
