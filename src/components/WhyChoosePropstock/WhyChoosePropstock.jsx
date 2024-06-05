import React from 'react'
import classes from "./WhyChoosePropstock.module.css"
import InitialTile from './InitialTile'
import world from "../../assets/images/world.svg"
import OtherTile from './OtherTile'
import AnimatedSection from '../AnimatedSection/AnimatedSection'
function WhyChoosePropstock() {
  return (

    <div className={classes.WhyChoosePropstock}>
      <AnimatedSection duration={1.5}>
    <div className={classes.Wrapper}>

    <InitialTile/>

    
      < OtherTile
          icon={world}
          title={"Global Reach"} 
          description={"At Propstock, we provide access to a diverse range of properties worldwide, enabling you to invest in prime real estate markets across the globe without geographical limitations."}
      />
      < OtherTile
          icon={world}
          title={"Expert Support"} 
          description={"Our team of real estate experts is dedicated to providing you with personalized support and guidance, helping you make the most of your investments and navigate the real estate market with confidence."}
      />
      < OtherTile
          icon={world}
          title={"Secure and Transparent"} 
          description={"We prioritize the security of your investments and the transparency of our processes. With Propstock, you can trust that your transactions are safe and your investment details are clear and accessible."}
      />

    </div>
    </AnimatedSection>
        </div>


  )
}

export default WhyChoosePropstock
