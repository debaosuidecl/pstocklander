import React from 'react'
import classes from "./FaqList.module.css"
import up from "../../assets/images/up.svg"
function FaqList({faqs,openfaq}) {
  return (
    <ul className={classes.FaqList}>
      {
        faqs && faqs.map((faq,i)=> <li>
          <div  onClick={()=> openfaq(i)} className={classes.Question}>
            <p>{faq.question}</p>
            <img src={up} alt="" />
            </div>
          {
            faq.opened && <div className={classes.Answer}>
          <p>{faq.answer}</p>


          </div>}
        </li>)
      }
    </ul>
  )
}

export default FaqList
