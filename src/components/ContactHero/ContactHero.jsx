import React from 'react'
import classes from "./ContactHero.module.css"
function ContactHero() {
  return (
    <div className={classes.ContactHero}>
            <br /><br /><br />
        <p className={classes.title}>Contact us</p>
        <br /><br /><br />

        <h2 className={classes.Header}>
       Got<span> Questions?</span> <br/>  Get in Touch
        </h2>

        <br /><br /><br />

        <p className={classes.subheader}
        >
We’re here to help! Whether you have questions about our platform, need assistance <br />with your account our dedicated support team is ready to assist you.        </p>


        <br /><br /><br />
        {/* <br /><br /><br />
        <br /><br /><br /> */}

    </div>
  )
}

export default ContactHero
