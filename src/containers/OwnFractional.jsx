import React from 'react'
import Layout from '../components/Layout/Layout'
import TextImage from '../components/TextImage/TextImage'
import bizwoman from "../assets/images/smileafri.png"
import UnlockPotential from '../components/UnlockPotential/UnlockPotential'
import Footer from '../components/Footer/Footer'
import AssetTrackerHero from '../components/AssetTrackerHero/AssetTrackerHero'
import ThreeImageLoopC from '../components/ThreeImageLoopC/ThreeImageLoopC'
import WhyChoosePropstock from '../components/WhyChoosePropstock/WhyChoosePropstock'
import OwnFractionHero from '../components/OwnFractionalHero/OwnFractionalHero'
import ThreeImageLoopD from '../components/ThreeImageLoopD/ThreeImageLoopD'

function OwnFractional() {
  return (
    <Layout background="#2286fe0d">
      <OwnFractionHero/>
      <br /><br /><br /><br /><br />

      <ThreeImageLoopD/>


      <TextImage
            title={"Ready to Experience the Propstock Difference?"}
            description={"Join the growing community of savvy investors who trust Propstock for their real estate investments. Discover the benefits of our innovative platform and start your journey to successful real estate investing today."}
            buttonText={"Get Started Now!"}
        img={bizwoman}/>
    <br /><br /><br /><br /><br />
 
        {/* <br /><br /><br /><br /><br />
      <TextImage
            title={"Take Control of Your Investments Today!"}
            description={"Experience the power of efficient investment management with Propstock’s asset trackers. Join today and gain the tools you need to streamline and enhance your real estate investments."}
            buttonText={"Get Started Now!"}
        img={bizwoman}/>


<WhyChoosePropstock/>




<UnlockPotential/> */}
{/* <WhyChoosePropstock/> */}
<UnlockPotential/>
<Footer/>

    </Layout>
  )
}

export default OwnFractional
