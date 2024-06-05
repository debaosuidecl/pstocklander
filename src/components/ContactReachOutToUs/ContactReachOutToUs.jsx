import React from 'react'
import classes from "./ContactReachOutToUs.module.css"
import facebook from "../../assets/images/facebook.svg"
import xlogo from "../../assets/images/xlogo.svg"
import linkedin from "../../assets/images/linkedin.svg"
import iglogo from "../../assets/images/iglogo.svg"
import SendUsAMessage from '../SendUsAMessage/SendUsAMessage'

function ContactReachOutToUs() {
  return (
    <div className={classes.ContactReachOutToUs}>

    <div className={classes.Left}>
             <h2>Reach out to us</h2>


        <div className={classes.Flex}>

            <div className={classes.callus}>
                <p>Call us</p>
                <p>+234 906 0000 000</p>
            </div>
            <div className={classes.emailus}>
                <p>Email us</p>
                <p>hello@mypropstock.com</p>
            </div>
        </div>

        <br /><br /><br /><br />

        <h2>Address</h2>

        <p className={classes.Address}>15A, Dasilva Street, Lekki,  Lagos </p>
        <br /><br /><br />
        <div className={classes.sociallinks}>
                <img src={facebook} alt="" />
                <img src={xlogo} alt="" />
                <img src={linkedin} alt="" />
                <img src={iglogo} alt="" />
         </div>

    </div>
    <div className={classes.Right}>
      <SendUsAMessage/>
    </div>
      
    </div>
  )
}

export default ContactReachOutToUs
