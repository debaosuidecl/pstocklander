import React from 'react'
import classes from "./Footer.module.css"
import logo from "../../assets/images/Logo.Color.svg"
import facebook from "../../assets/images/facebook.svg"
import xlogo from "../../assets/images/xlogo.svg"
import linkedin from "../../assets/images/linkedin.svg"
import iglogo from "../../assets/images/iglogo.svg"
function Footer() {
  return (
    <div className={classes.Footer}>
        <div className={classes.Item1}>
            <div className={classes.Logo}>
                 <img src={logo} alt="" />
            </div>

            <br></br>

            <p>
            Propstock revolutionizes real estate investment with global property exploration and fractional ownership, allowing you to diversify your portfolio.
            </p>


            <br></br>
            <br></br>

            <div className={classes.sociallinks}>
                <img src={facebook} alt="" />
                <img src={xlogo} alt="" />
                <img src={linkedin} alt="" />
                <img src={iglogo} alt="" />
            </div>


        </div>

        <div className={classes.Item2}>
            <p><strong>Company</strong></p>
            <br /><br /><br />
            <p><a href="#">About</a></p>
            <p><a href="#">Contact</a></p>
            <p><a href="#">FAQs</a></p>
        </div>
        <div className={classes.Item2}>
            <p><strong>Discover</strong></p>
            <br /><br /><br />
            <p><a href="#">Stock</a></p>
            <p><a href="#">Affiliate</a></p>
            <p><a href="#">Asset Trackers</a></p>
            <p><a href="#">Why Propstock</a></p>
        </div>
        <div className={classes.Item2}>
            <p><strong>Legal</strong></p>
            <br /><br /><br />
            <p><a href="#">Privacy Policy</a></p>
            <p><a href="#">Terms & Conditions</a></p>
        </div>
        <div className={classes.Item2}>
            <p><strong>Contact</strong></p>
            <br /><br /><br />
            <p><a href="#">15A, Dasilva Street, Lekki, 
Lagos </a></p>
            <p><a href="#">hello@mypropstock.com</a></p>
            <p><a href="#">+234 906 0000 000</a></p>
        </div>
    </div>
  )
}

export default Footer
