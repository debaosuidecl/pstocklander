import React from 'react'
import classes from "./ThreeImageLoopB.module.css"
import my_investments from "../../assets/images/my_investments.svg"
import q1q4 from "../../assets/images/q1q4.png"
import withdraw from "../../assets/images/withdraw.png"
import affiliate1 from "../../assets/images/affiliate1.png"
import investb from "../../assets/images/investb.png"
import Walletb from "../../assets/images/Walletb.png"

import AnimatedSection from '../AnimatedSection/AnimatedSection'
function ThreeImageLoopB() {
  return (
    <div className={classes.ThreeImageLoopB}>
         <div className={classes.InvestHalf} style={{
            background: "#1D33540D"
         }}>
                <div className={classes.Left}>
                <div className={classes.LeftText}>

                    <h2>  <span style={{color: "#2286FE"}}> High</span> Commision<br/> Rates
          </h2>
                    <br />
                    <p>
                    Earn competitive commissions for every referral that converts into an active investor.
                    </p>                  
                  <br />
                    <br />
                
                </div>
                <br /><br /><br /> <br/>
                <div className={classes.Right}>


                    <img src={affiliate1} alt="" />
                </div>
            </div>

        </div>

        <div className={classes.InvestHalf} style={{
            background: "#2286FE0D"
        }}>

                <div className={classes.Right}>


                <img src={q1q4} alt="" />
                </div>
                <div className={classes.Left}>
                <div className={classes.LeftText}>

                    <h2>Real-Time  <br/>    <span style={{color: "#2286FE"}}> Tracking</span> 
                </h2>
                    <br />
                    <p>
                    Monitor your referrals and commissions in real-time with our advanced tracking system.                               </p>
                    <br />
                    <br />
                
                </div>
                <br /><br /><br /> <br/>
            
            </div>

        </div>


        <div className={classes.InvestHalf} style={{
            background: "#1D33540D"
        }}>
                <div className={classes.Left}>
                    <div className={classes.LeftText}>

                        <h2>
                         <span style={{color: "#2286FE"}}>Flexible</span> Payout<br></br>
                            Options.
                         </h2>
                        <br />
                        <p>
                        Choose from multiple payout options to receive your commissions conveniently.               
                                    </p>
                        <br />
                        <br />
                    
                    </div>
               
            </div>
            <div className={classes.Right}>


            <img src={withdraw} alt="" />
            </div>

        </div>
    </div>
  )
}

export default ThreeImageLoopB
