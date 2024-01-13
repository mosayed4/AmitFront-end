import React, { Fragment } from 'react'
import backgroundStyles from  "../home.module.css" 
import bgImg from '../../../images//backgrond.jpg'
export const Background = () => {
  return (
    <Fragment>
    <section className={backgroundStyles.backgroundSection}>
      <img src={bgImg} alt="" />  
      <div className={backgroundStyles.backgroundData}>
        <h1>Welcome To Our E-COMMERCE Website </h1>

       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
       
      </div>
    </section>
    </Fragment>

    
  )
}
