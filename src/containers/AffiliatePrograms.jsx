import React from 'react'
import Layout from '../components/Layout/Layout'
import TextImage from '../components/TextImage/TextImage'
import bizwoman from "../assets/images/happywoman1.png"
import UnlockPotential from '../components/UnlockPotential/UnlockPotential'
import Footer from '../components/Footer/Footer'
import AffiliateHero from '../components/AffiliateHero/AffiliateHero'
import ThreeImageLoopB from '../components/ThreeImageLoopB/ThreeImageLoopB'
import HowItWorksSchemaB from '../components/HowItWorksSchemaB/HowItWorksSchemaB'

function AffiliatePrograms() {
  return (
    <Layout background="#2286fe0d">
      <AffiliateHero/>
      <br /><br /><br /><br /><br />

      <ThreeImageLoopB/>
      <TextImage
            title={"Ready to Start Earning with Propstock?"}
            description={"Join the Propstock affiliate program today and start earning rewards by promoting our innovative real estate investment platform. It’s simple, rewarding, and a great way to share the benefits of Propstock with your network."}
            buttonText={"Become an Affiliate"}
        img={bizwoman}/>

      <HowItWorksSchemaB/>
      <UnlockPotential/>
      <Footer/>
    </Layout>
  )
}

export default AffiliatePrograms
