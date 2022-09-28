import { Button,Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { contactUs } from '../../action/user'
import "./Contact.css"
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const alert = useAlert();
   
    const {loading, message:alertMessage , error} = useSelector((state)=>state.update);

    const contactFormHandler = (e) =>{
        e.preventDefault();
        dispatch(contactUs(name,email,message));
    }
    useEffect(() => {
      if (error) {
          alert.error(error);
          dispatch({ type: "CLEAR_ERRORS" });
      }
      if (alertMessage) {
          alert.success(alertMessage);
          dispatch({ type: "CLEAR_MESSAGE" });
      }
     

  }, [alert, error, dispatch,alertMessage]);
  return (
    <div className='Contact'>
      <div className="ContactRightBar"></div>
      <div className="contactContainer">
        <form action="" className="ContactContainerForm" onSubmit={contactFormHandler}>
            <Typography>Contact Us</Typography>
            <input type="text" placeholder='Name' value={name} required onChange={(e)=> setName(e.target.value)} />
            <input type="email" placeholder='Email'value={email} required onChange={(e)=> setEmail(e.target.value)} />
            <textarea placeholder="Message" name="" id="" cols="30" required rows="10" value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
            <Button variant='contained' type='submit' disabled={loading}>
                send
            </Button>
        </form>
      </div>
    </div>
  )
}

export default Contact
