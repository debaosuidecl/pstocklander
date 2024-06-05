import React from 'react'
import classes from "./ThreeImageLoop.module.css"
import my_investments from "../../assets/images/my_investments.svg"
import stock_analysis from "../../assets/images/stock_analysis.png"
import investb from "../../assets/images/investb.png"
import Walletb from "../../assets/images/Walletb.png"

import AnimatedSection from '../AnimatedSection/AnimatedSection'
function ThreeImageLoop() {
  return (
    <div className={classes.ThreeImageLoop}>
         <div className={classes.InvestHalf} style={{
            background: "#1D33540D"
         }}>
                <div className={classes.Left}>
                <div className={classes.LeftText}>

                    <h2>Instant Real Estate <br/> Stock
                    <span style={{color: "#2286FE"}}> Analysis.</span></h2>
                    <br />
                    <p>
                    Gain deep insights into real estate stocks with our advanced analysis tools.                     </p>
                    <br />
                    <br />
                
                </div>
                <br /><br /><br /> <br/>
                <div className={classes.Right}>


                    <img src={stock_analysis} alt="" />
                </div>
            </div>

        </div>

        <div className={classes.InvestHalf} style={{
            background: "#2286FE0D"
        }}>
                <div className={classes.Left}>
                <div className={classes.LeftText}>

                    <h2>Efficient     <span style={{color: "#2286FE"}}> Portfolio</span> <br/>
                    Management
                </h2>
                    <br />
                    <p>
                    Efficiently track and manage your real estate investments with our intuitive portfolio management system.                    </p>
                    <br />
                    <br />
                
                </div>
                <br /><br /><br /> <br/>
                <div className={classes.Right}>


                    <img src={investb} alt="" />
                </div>
            </div>

        </div>


        <div className={classes.InvestHalf} style={{
            background: "#1D33540D"
        }}>
                <div className={classes.Left}>
                    <div className={classes.LeftText}>

                        <h2>Personalized & <br/>
                        Secure <span style={{color: "#2286FE"}}> Wallet.</span></h2>
                        <br />
                        <p>
                        Securely store and manage your funds with our integrated wallet feature.                     </p>
                        <br />
                        <br />
                    
                    </div>
               
            </div>
            <div className={classes.Right}>


            <img src={Walletb} alt="" />
            </div>

        </div>
    </div>
  )
}

export default ThreeImageLoop
