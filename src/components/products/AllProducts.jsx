import React, { Fragment, useEffect, useState } from 'react'
 import  productsStyles from  './products.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../Redux/cartSlice';



// this is call api  and fun addToCart 
export const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => setProducts(res.data.products)) 
      .catch((err) => console.log(err));
  }, []);
  const dispatch = useDispatch()
  return (
   <Fragment>
         <div className={productsStyles.container} >
          {
            products.map(el=>(
                <div className={productsStyles.product} key={el.id}>
                  <img src={el.thumbnail} alt="" />
                  <h2>{el.title} </h2>
                  <h4>Price ${el.price} </h4>
                  <button type="button"className={productsStyles.btn} onClick={()=>dispatch(cartSlice.actions.addToCart(el))}>Add To Cart </button>
                 <Link to={""}>Read More</Link>
                </div>
            ))
          }
           </div>
    </Fragment>
  )
}
