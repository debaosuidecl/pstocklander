import React from 'react'
import classes from "./Layout.module.css"
import Nav from '../Nav/Nav'
function Layout(props) {
  return (
    <div className={classes.Layout}>
      <Nav background={props.background}/>
      <div className={classes.Children}>{props.children}</div>
      
    </div>
  )
}

export default Layout
