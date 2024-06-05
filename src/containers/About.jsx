import React from 'react'
import Layout from '../components/Layout/Layout'
import AboutUsHero from '../components/AboutUsHero/AboutUsHero'
import AboutUsText from '../components/AboutUsText/AboutUsText'
// import classes from "./About.module.css"
import AboutUsImage from '../components/AboutUsImage/AboutUsImage'
import CountComponent from '../components/CountComponent/CountComponent'
import MeetOurTeam from '../components/MeetOurTeam/MeetOurTeam'
import WhyChoosePropstock from '../components/WhyChoosePropstock/WhyChoosePropstock'
import Brands from '../components/Brands/Brands'
import UnlockPotential from '../components/UnlockPotential/UnlockPotential'
import Footer from '../components/Footer/Footer'
function About() {
  return (
    <Layout>
      
      <AboutUsHero/>
      <AboutUsImage/>
      <br></br>
      <br></br>
      <br></br>

      <AboutUsText/>
      <br /><br /><br />

      <CountComponent/>
      <br /><br /><br />
      <br /><br /><br />
      <MeetOurTeam/>
      <br /><br /><br />
      <br /><br /><br />
    <WhyChoosePropstock/>
      <br /><br /><br />
      <br /><br /><br />
      <Brands/>
      <br /><br /><br />
      <br /><br /><br />

      <UnlockPotential/>
      <br /><br /><br />
      <br /><br /><br />

      <Footer/>
    </Layout>
  )
}

export default About
