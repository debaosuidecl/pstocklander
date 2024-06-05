import React from 'react'
import classes from "./AboutUsText.module.css"
function AboutUsText() {
  return (
    <div className={classes.AboutUsText}>
      <div className={classes.Text}>
        <p>With the rise of globalization and digital innovation, we saw an opportunity to revolutionize the way people experience real estate. Propstock was born out of a vision to make real estate investment accessible, convenient, and inclusive for everyone. Our intuitive platform allows you to explore a diverse range of properties from every corner of the globe, all with just a few clicks.</p>
        <p>We offer the unique opportunity to invest in fractions of properties, enabling you to diversify your investment portfolio without the need for full ownership. This innovative approach empowers you to invest in high-value real estate that might have been out of reach otherwise.</p>
        <p>At Propstock, we're not just here to facilitate transactions; we're committed to building lasting relationships and fostering a vibrant community. We believe in simplifying the journey to owning a fraction of the world, making it a rewarding experience for all our users.</p>
        <p>Our platform combines cutting-edge technology with expert insights to guide you through every step of your investment journey. Whether you're a seasoned investor or new to real estate, Propstock provides the tools, resources, and support you need to succeed.</p>
        <p>Join us today and embark on your journey to international property ownership. Experience the future of real estate investment with Propstock, where your dreams of global property ownership become a reality.</p>
      </div>

      <div className={classes.Cards}>

        <div className={classes.Card}>
            <br /><br />
            <h2>Our Vision</h2>
            <br /><br />
            <p>“Our vision is to promote global <br/> connectivity through the simplified <br/>exchange of real estate assets."</p>
          <br /><br/>
        </div>
        <div className={classes.Card}>
        <br /><br />

            <h2>Our Mission</h2>
            <br /><br/>

            <p>“Our mission is to empower individuals to invest in real estate globally by providing an accessible and innovative platform.”</p>
            <br /><br/>
        </div>
      </div>
    </div>
  )
}

export default AboutUsText
