import React from 'react'
import classes from "./Brands.module.css";
import brands from "../../assets/images/brands.svg"
function Brands() {
  return (
    <div className={classes.Brands}>
      <img src={brands} alt="" />
    </div>
  )
}

export default Brands
