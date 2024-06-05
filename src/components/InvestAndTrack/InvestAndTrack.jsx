import React from 'react'
import classes from "./InvestAndTrack.module.css"
import InvestHalf from './InvestHalf'
import TrackHalf from './TrackHalf'
import AnimatedSection from '../AnimatedSection/AnimatedSection'
function InvestAndTrack() {
  return (
    <div className={classes.InvestAndTrack}>
      <AnimatedSection duration={1}>

          <InvestHalf/>
      </AnimatedSection>

      <AnimatedSection  duration={2}>

      <TrackHalf/>
      </AnimatedSection>
    </div>
  )
}

export default InvestAndTrack
