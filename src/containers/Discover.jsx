import React from 'react'
import Layout from '../components/Layout/Layout'
import DiscoverHero from "../components/DiscoverHero/DiscoverHero"
import ThreeImageLoop from '../components/ThreeImageLoop/ThreeImageLoop'
import TextImage from '../components/TextImage/TextImage'
import bizwoman from "../assets/images/bizwoman.png"
import HowItWorksSchema from '../components/HowItWorksSchema/HowItWorksSchema'
import WhyChoosePropstock from '../components/WhyChoosePropstock/WhyChoosePropstock'
import UnlockPotential from '../components/UnlockPotential/UnlockPotential'
import Footer from '../components/Footer/Footer'

function Discover() {
  return (
    <Layout background="#2286fe0d">
      <DiscoverHero/>
      <br /><br /><br /><br /><br />
      <ThreeImageLoop/>
      <br />
        <TextImage
            title={"Why Invest in Real Estate Stock?"}
            description={"Real estate stock offers a unique and accessible way to invest in high-value properties across the globe. At Propstock, we provide a platform where you can buy fractions of prime real estate, allowing you to diversify your investment portfolio and gain exposure to the lucrative real estate market without the need for full ownership."}
            buttonText={"Start Investing"}
        img={bizwoman}/>

    <br />

    <HowItWorksSchema/>

    <br ></br>
    <br ></br>
    <br ></br>
    <br ></br>
    <br ></br>
    <br ></br>
    <WhyChoosePropstock/>
    <UnlockPotential/>
    <Footer/>
    
    </Layout>
  )
}

export default Discover
