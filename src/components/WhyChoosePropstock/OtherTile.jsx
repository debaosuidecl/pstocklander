import React from 'react'
import classes from "./OtherTiles.module.css";

function OtherTile({icon,title, description}) {
  return (
    <div className={classes.OtherTile}>
      <br></br>
      <br></br>
        <img src={icon} alt="" />
        <br />
        <br></br>

        <p className={classes.title}>{title}</p>

        <br />

        <p className={classes.description}>{description}</p>
    </div>
  )
}

export default OtherTile
