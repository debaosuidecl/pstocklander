import React from 'react'
import classes from "./MeetOurTeam.module.css"
import Ayobami from "../../assets/images/Ayobami.jpg"
function MeetOurTeam() {
  return (
    <div className={classes.MeetOurTeam}>
        <h2 className={classes.Header}>
        Meet our <span>Team</span> 
        </h2>

        <br /><br /><br />

        <p className={classes.subheader}>
        Get to know the passionate and dedicated professionals behind Propstock.<br></br> Our team is composed of real estate experts, innovative technologists, and <br /> customer support specialists
        </p>

        <br/>
        <br/>
        <br/>

        <div className={classes.Team}>
            <div className={classes.Member}>

                <img src={Ayobami} alt=""  />
                <br></br>
                <h2>Akin Ayobami</h2>
                <p>Founder and CEO</p>
            
            </div>
            <div className={classes.Member}>

                <img src={Ayobami} alt=""  />
                <h2>Victoria Omolade</h2>
                <p>Product Designer</p>
            
            </div>
            <div className={classes.Member}>

                <img src={Ayobami} alt=""  />
                <h2>Akin Ayobami</h2>
                <p>Founder and CEO</p>
            
            </div>
        </div>

    </div>
  )
}

export default MeetOurTeam
