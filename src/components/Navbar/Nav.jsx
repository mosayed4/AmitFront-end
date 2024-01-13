import { Fragment } from 'react'
import React from 'react'

import { NavLink } from 'react-router-dom'
import './nav.css'
import { PiShoppingCartBold } from "react-icons/pi";

import { GrHomeRounded } from "react-icons/gr";

import { MdOutlineMail } from "react-icons/md";
import { MdOutlineStore } from "react-icons/md";
import img2 from '../../images/logo_light.png'
import { FaAddressCard } from "react-icons/fa";



export const Nav = () => {
  return (
    <Fragment> 
     <header>
        <nav>
            <span>
           
                <NavLink to={'/home'}>
                  <img src={img2} alt="" />
                </NavLink>
                
            </span>
            <ul>


                <NavLink to={'/home'} ><GrHomeRounded size={30}/> Home </NavLink>
                <NavLink to={'/products'}><MdOutlineStore size={30}/> Products</NavLink>
                <NavLink to={'/cart'} > <PiShoppingCartBold size={30}/> Cart</NavLink>
                <NavLink to={'/contact'}> <MdOutlineMail size={30} /> Contact </NavLink>
                <NavLink to={'/login'}> <FaAddressCard  size={30}/> Login </NavLink>
            </ul>
        </nav>
     </header>
    </Fragment>
  )
}
