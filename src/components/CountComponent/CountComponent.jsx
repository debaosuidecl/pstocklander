import React, { useState } from 'react'
import CountComponentItem from './CountComponentItem'
import classes from "./CountComponent.module.css"

function CountComponent() {
    const [investorCount] = useState("2906")
    const [totalInvestment] = useState("$36M+")
    const [totalPayout] = useState("$14M+")
  return (
    <div className={classes.CountComponent}>
        
      <CountComponentItem
        number={investorCount}

        desc="Total Investor"
      />
      <CountComponentItem
        number={totalInvestment}

        desc="Total Invested"
      />
      <CountComponentItem
        number={totalPayout}

        desc="Total Payouts"
      />
    </div>
  )
}

export default CountComponent
