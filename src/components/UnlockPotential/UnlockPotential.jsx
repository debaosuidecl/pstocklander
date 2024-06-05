import React from 'react';
import classes from "./UnlockPotential.module.css";
// import unlockpotential from "../../assets/images/unlockpotential.png"
import play_button_white from "../../assets/images/play_button_white.svg"
import apple_icon from "../../assets/images/apple_icon.svg"
import phone_group from "../../assets/images/phone_group.png"
import AnimatedSection from '../AnimatedSection/AnimatedSection';

function UnlockPotential(props) {
  return (
    <div className={classes.UnlockPotential}>
        <br />
        <br />
        <br />
        <br />
      <h2>Unlock Global Real Estate <br/> Opportunities Today!</h2>

      <br /><br />

    <p className={classes.desc}>Become part of a thriving community of investors. Explore, invest, and grow <br/> your real estate portfolio with ease.</p>


    <br /><br /><br />

    <div className={classes.Flex}>

        <div className={classes.TransparentButton}>
            <img src={play_button_white} alt="" />

            <div className={classes.textright}>
                <p className={classes.maintext}>Download</p>
                <p className={classes.descb}>For Android</p>
            </div>

        </div>
        <div className={classes.TransparentButton}>
            <img src={apple_icon} alt="" />

            <div className={classes.textright}>
                <p className={classes.maintext}>Download</p>
                <p className={classes.descb}>For Apple</p>
            </div>

        </div>
    </div>

    <br /><br />
    <br /><br /> 
    <br /><br /> 
    <br /><br /> 


<AnimatedSection>

    <div className={classes.Flexb}>


    <img src={phone_group} alt="" />
    </div>
</AnimatedSection>
    </div>
  )
}

export default UnlockPotential
