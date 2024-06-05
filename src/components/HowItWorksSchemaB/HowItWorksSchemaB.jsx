import React from 'react'
import classes from "./HowItWorksSchemaB.module.css"

function HowItWorksSchemaB() {
  return (
    <div className={classes.HowItWorksSchemaB}>
               <br /><br /><br />
        <p className={classes.title}>How is works</p>
        <br />
        <h2 className={classes.Header}>
        How to get started as an <span>Affiliate</span>
        </h2>

        <br /><br /><br />

        <p className={classes.subheader}>
        Joining our affiliate program is simple and straightforward. Follow these easy steps to start earning rewards                </p>


        <br /><br /><br />
        
        <div className={classes.group}>

        <div className={classes.groupitem}>
            <div className={classes.Number}>1</div>
            <h2>Sign Up</h2>
            <p>Register for our affiliate program by filling out <br /> a quick application form.</p>
        </div>
        <div className={classes.groupitem}>
            <div className={classes.Number}>2</div>
            <h2>Promote</h2>
            <p>Share your unique referral link through your <br /> website, social media, or other channels.</p>
        </div>
        <div className={classes.groupitem}>
            <div className={classes.Number}>3</div>
            <h2>Earn</h2>
            <p>Earn commissions for every new user who signs <br /> up and invests through your referral.</p>
        </div>

        </div>
    </div>
  )
}

export default HowItWorksSchemaB
