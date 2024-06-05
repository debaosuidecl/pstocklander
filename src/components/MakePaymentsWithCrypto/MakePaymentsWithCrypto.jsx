import React from 'react'
import classes from "./MakePaymentsWithCrypto.module.css"
import crypto from "../../assets/images/crypto.svg"
import Button from '../Button/Button'
function MakePaymentsWithCrypto() {
  return (
    <div className={classes.MakePaymentsWithCrypto}>
            
   
        <div className={classes.Right}>

            <img src={crypto} alt="" />
        </div>
        <div className={classes.Left}>
        <div className={classes.LeftText}>

            <h2>Make Payments with <br/>
            <span style={{color: "#2286FE"}}> Cryptocurrencies.</span></h2>
            <br />
            <p>
            At Propstock, we embrace the future of finance by offering the option to make payments with cryptocurrency. Our platform supports a variety of popular cryptocurrencies, allowing you to invest in real estate with the security, speed, and convenience of digital currencies.             </p>
            <br />
            <br />
            <div className={classes.Flex}>
                {/* <img src={dandroid} height={60} alt="" />
                <img src={diphone1} height={60}  alt="" /> */}

                <Button>Start Investing Now!</Button>
            </div>
            <br />
            <br />
        </div>
            {/* <img src={sellwithdrawgiftfriend} alt="" /> */}
     </div>

      
    </div>
  )
}

export default MakePaymentsWithCrypto
