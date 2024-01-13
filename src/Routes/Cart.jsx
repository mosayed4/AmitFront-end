import React, { Fragment } from 'react'
import { Nav } from '../components/Navbar/Nav'
import CartComponents from '../components/Redux/Cart/CartComponents'

export const Cart = () => {
  return (
    <Fragment>     
     <Nav/>
     <CartComponents/>
    </Fragment>
  )
}
