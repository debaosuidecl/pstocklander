import React from 'react'
import Layout from '../components/Layout/Layout'
import FaqHero from '../components/FaqHero/FaqHero'
import UnlockPotential from '../components/UnlockPotential/UnlockPotential'
import Footer from '../components/Footer/Footer'

function Faq() {
  return (
    <Layout>
        <FaqHero/>
        <UnlockPotential/>
        <Footer/>
    </Layout>
  )
}

export default Faq
