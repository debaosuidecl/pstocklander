import React from 'react'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import Brands from '../components/Brands/Brands'
import StartInvestingPrompts from '../components/StartInvestingPrompts/StartInvestingPrompts'
import InvestAndTrack from '../components/InvestAndTrack/InvestAndTrack'
import MakePaymentsWithCrypto from '../components/MakePaymentsWithCrypto/MakePaymentsWithCrypto'
import AffiliatePrograms from '../components/AffiliatePrograms/AffiliatePrograms'
import WhyChoosePropstock from '../components/WhyChoosePropstock/WhyChoosePropstock'
import UnlockPotential from '../components/UnlockPotential/UnlockPotential'
import Footer from '../components/Footer/Footer'
import AnimatedSection from '../components/AnimatedSection/AnimatedSection'

function Home() {
  return (
    <Layout background="#2286fe0d">
        <Hero/>

        <Brands/>
        <AnimatedSection>
          <StartInvestingPrompts/>
        </AnimatedSection>
        <InvestAndTrack/>
        <AnimatedSection duration={1.5}>
           <MakePaymentsWithCrypto/>
        </AnimatedSection>
        <AnimatedSection duration={1.5}>

          <AffiliatePrograms/>
        </AnimatedSection>
        <WhyChoosePropstock/>
        <UnlockPotential/>
        <Footer/>
    </Layout>
  )
}

export default Home
