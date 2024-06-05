import React, { useState } from 'react'
import classes from "./SendUsAMessage.module.css"
import axios from 'axios'
function SendUsAMessage() {
    const [name, setname]  =  useState("")
    const [email, setemail]  =  useState("")
    const [phone, setphone]  =  useState("")
    const [messages, setmessages]  =  useState("")


    const sendmessage = async ()=>{
        const datab = {
            name,
            email,
            phone,
            messages
        };


        if(!email || !name || !phone || !messages) return alert("every input is important")
        try {
      const {data} =     await  axios.post("https://jawfish-good-lioness.ngrok-free.app/api/contact/sendmail", datab)
            console.log({data})
            alert("message sent. we will get back to you as soon as possible")

            setname("")
            setemail("")
            setphone("")
            setmessages("")
        } catch (error) {
            console.log(error);
            alert("message not sent because an error occured")
        }


    }
  return (
    <div className={classes.SendUsAMessage}>
        <h2>Send us a message.</h2>
        <br />
        <p>Feel free to contact us with questions or inquiries.</p>
        <br />
      <div className={classes.Input}>
        <input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder='Name *'/>
      </div>
      <div className={classes.Flex}>
        <input value={email} onChange={(e)=>setemail(e.target.value)} type="text" placeholder='Email Address *' />
        <input value={phone} onChange={(e)=>setphone(e.target.value)}  type="text" placeholder='Phone Number *' />
      </div>
      

      <div className={classes.Input}>

        <textarea value={messages} onChange={(e)=> setmessages(e.target.value)} placeholder='Messages *'>

        </textarea>
      </div>

      <br />

      <button onClick={sendmessage}>Send Message</button>


    </div>
  )
}

export default SendUsAMessage
