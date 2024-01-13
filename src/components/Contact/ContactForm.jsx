import React, { useState } from 'react'
import { Fragment } from 'react'
import formStyles from './form.module.css'
import formImg from '../../images/pexels-krivec-ales-547114.jpg'

const ContactForm = () => {
  const  [user , setUser] = useState({ 
     fullName: ``,
     email : ``,
     msg: ``
  });
  return (
    <Fragment>
    <section className={formStyles.ContactSection}>
    <img src={formImg} alt=""/>
    <form>
       <h1> Contact Data</h1>
        <input type="text"  placeholder='Full Name' value={user.fullName} onChange={(e)=>setUser({...user, fullName: e.target.value})}/>
        <input type="text"  placeholder='Email'value={user.email} onChange={ (e)=>setUser({...user,email: e.target.value})}/>
        <input type="text"  placeholder='Massage'value={user.msg} onChange={(e)=>setUser ({...user,msg:e.target.value})}/>
        <input type="Submit" />



    </form>
    </section>
    <h1>{user.fullName}{user.email} {user.msg} </h1>
    </Fragment>


  )
}

export default ContactForm