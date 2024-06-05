import React from 'react'
import Layout from '../components/Layout/Layout'
import ContactHero from '../components/ContactHero/ContactHero'
import ContactReachOutToUs from '../components/ContactReachOutToUs/ContactReachOutToUs'
import UnlockPotential from '../components/UnlockPotential/UnlockPotential'
import Footer from '../components/Footer/Footer'

function Contact() {
  return (
    <Layout>
     <ContactHero/>
     <ContactReachOutToUs/>
     <UnlockPotential/>
     <Footer/>
    </Layout>
  )
}

export default Contact
