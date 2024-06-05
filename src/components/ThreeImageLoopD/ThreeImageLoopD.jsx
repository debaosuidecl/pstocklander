import React from 'react'
import classes from "./ThreeImageLoopD.module.css"
import my_investments from "../../assets/images/my_investments.svg"
import q1q4 from "../../assets/images/q1q4.png"
import mix from "../../assets/images/mix.png"
import home from "../../assets/images/home.png"
import chart from "../../assets/images/chart.png"
import investb from "../../assets/images/investb.png"
import Walletb from "../../assets/images/Walletb.png"

import AnimatedSection from '../AnimatedSection/AnimatedSection'
function ThreeImageLoopD() {
  return (
    <div className={classes.ThreeImageLoopD}>
         <div className={classes.InvestHalf} style={{
            background: "#1D33540D"
         }}>
                <div className={classes.Left}>
                <div className={classes.LeftText}>

                    <h2>Own Fractional <span style={{color: "#2286FE"}}> Ownership.</span>
          </h2>
                    <br />
                    <p>
                    Invest in high-value properties without the need for full ownership, allowing for a more diversified and accessible investment portfolio.                  </p>                  
                  <br />
                    <br />
                
                </div>
                <br /><br /><br /> <br/>
                <div className={classes.Right}>


                    <img src={home} alt="" />
                </div>
            </div>

        </div>

        <div className={classes.InvestHalf} style={{
            background: "#2286FE0D"
        }}>

                <div className={classes.Right}>


                <img src={chart} alt="" />
                </div>
                <div className={classes.Left}>
                <div className={classes.LeftText}>

                    <h2>Get     <span style={{color: "#2286FE"}}> Real-Time <br /> Updates.</span> 
                </h2>
                    <br />
                    <p>
                    Receive real-time updates on property performance, market trends, and portfolio value.                                             </p>
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

                        <h2>Comprehensive <br />
                        Detailed<span style={{color: "#2286FE"}}> Reports</span> 
                         </h2>
                        <br />
                        <p>
                        Receive real-time updates on property performance, market trends, and portfolio value.                                    </p>
                        <br />
                        <br />
                    
                    </div>
               
            </div>
            <div className={classes.Right}>


            <img src={mix} alt="" />
            </div>

        </div>
    </div>
  )
}

export default ThreeImageLoopD
