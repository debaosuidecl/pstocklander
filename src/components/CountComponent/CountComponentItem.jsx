import React from 'react'
import classes from "./CountComponent.module.css"
function CountComponentItem({
    number, desc
}) {
  return (
    <div className={classes.CountComponentItem}>
        <h2>{number}</h2>
        <p>{desc}</p>
      
    </div>
  )
}

export default CountComponentItem
