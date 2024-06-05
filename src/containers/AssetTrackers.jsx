import React from 'react'
import Layout from '../components/Layout/Layout'
import TextImage from '../components/TextImage/TextImage'
import bizwoman from "../assets/images/bizwoman.png"
import UnlockPotential from '../components/UnlockPotential/UnlockPotential'
import Footer from '../components/Footer/Footer'
import AssetTrackerHero from '../components/AssetTrackerHero/AssetTrackerHero'
import ThreeImageLoopC from '../components/ThreeImageLoopC/ThreeImageLoopC'
import WhyChoosePropstock from '../components/WhyChoosePropstock/WhyChoosePropstock'

function AssetTrackers() {
  return (
    <Layout background="#2286fe0d">
      <AssetTrackerHero/>
      <br /><br /><br /><br /><br />
      <ThreeImageLoopC/>
      <br /><br /><br /><br /><br />
      <TextImage
            title={"Take Control of Your Investments Today!"}
            description={"Experience the power of efficient investment management with Propstock’s asset trackers. Join today and gain the tools you need to streamline and enhance your real estate investments."}
            buttonText={"Get Started Now!"}
        img={bizwoman}/>


<WhyChoosePropstock/>

<UnlockPotential/>
<Footer/>

    </Layout>
  )
}

export default AssetTrackers
