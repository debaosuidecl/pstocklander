import React from 'react'
import classes from "./FaqHero.module.css"
import FaqList from '../FaqList/FaqList'
import AnimatedSection from '../AnimatedSection/AnimatedSection'
function FaqHero() {

    const [faqs,setfaqs] = React.useState([
        {
            question: "What is Propstock?",
            answer: "Propstock is an innovative platform that allows users to explore and invest in real estate properties worldwide through fractional ownership, making it easier to diversify your investment portfolio.",
            opened: false,
        },
        {
            question: "How does fractional ownership work?",
            answer: "",
            opened: false,
        },
        {
            question: "What type of property can I expect in through propstock",
            answer: "",
            opened: false,
        },
        {
            question: "Is my investment secure with Propstock?",
            answer: "",
            opened: false,
        },
        {
            question: "What is the minimum investment amount on Propstock",
            answer: "",
            opened: false,
        },
        {
            question: "How can I track my investments on Propstock",
            answer: "",
            opened: false,
        },
        {
            question: "Can I sell my property fractions",
            answer: "",
            opened: false,
        },
        {
            question: "Can I sell my property fractions",
            answer: "",
            opened: false,
        },
        {
            question: "How do I become an affiliate on Propstcok",
            answer: "",
            opened: false,
        },
        {
            question: "What support is available if I need help",
            answer: "",
            opened: false,
        },
        {
            question: "Are there any fees associated with using Propstock?",
            answer: "",
            opened: false,
        },
        
    ])
  return (
    <div className={classes.FaqHero}>
            <br /><br /><br />
  

        <h2 className={classes.Header}>
        Frequently Asked <br/>Questions.
        </h2>

        <br /><br /><br />

        <p className={classes.subheader}>
        Got questions? We've got answers! Browse through our list of frequently <br /> asked questions to find the information you need about Propstock.        </p>


        <br /><br /><br />
  


    <AnimatedSection>

        <FaqList faqs={faqs} openfaq={(i)=>{
            setfaqs(prev=> prev.map((f,index)=> {
                if(index == i){
                    return {...f, opened: !f.opened}
                }

                return f;
            }))
        }}/>
    </AnimatedSection>



    </div>
  )
}

export default FaqHero
