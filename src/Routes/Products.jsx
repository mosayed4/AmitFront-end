import React, { Fragment } from 'react'
import { Nav } from '../components/Navbar/Nav'
import { AllProducts } from '../components/products/AllProducts'
export const Products = () => {
  return (
    <Fragment>
     <Nav/>
      
    <AllProducts/>
   </Fragment>
  )
}
