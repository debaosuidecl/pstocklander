import React from 'react'
import classes from "./HowItWorksSchema.module.css"

function HowItWorksSchema() {
  return (
    <div className={classes.HowItWorksSchema}>
               <br /><br /><br />
        <p className={classes.title}>How is works</p>
        <br />
        <h2 className={classes.Header}>
        How <span>Fractional</span> Ownership Works.
        </h2>

        <br /><br /><br />

        <p className={classes.subheader}>
        Fractional ownership enables you to buy shares in a property rather than the entire property. This model reduces the capital required to invest in real estate and allows you to spread your investments across multiple properties, mitigating risks and maximizing potential returns.            </p>


        <br /><br /><br />
        
        <div className={classes.group}>

        <div className={classes.groupitem}>
            <div className={classes.Number}>1</div>
            <h2>Browse Properties</h2>
            <p>Explore a curated selection of high-quality <br /> properties listed on our platform.</p>
        </div>
        <div className={classes.groupitem}>
            <div className={classes.Number}>2</div>
            <h2>Invest in shares</h2>
            <p>Choose the properties that align with your <br /> investment goals and purchase fractions.</p>
        </div>
        <div className={classes.groupitem}>
            <div className={classes.Number}>3</div>
            <h2>Earn returns</h2>
            <p>Enjoy rental income and potential appreciation <br /> from your real estate investments.</p>
        </div>

        </div>
    </div>
  )
}

export default HowItWorksSchema
