import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart, deleteCart } from '../redux/action/index'
const Cart = () => {
   const state = useSelector((state) => state.handleCart);
   const dispatch = useDispatch();
   const handleClose = (item) => {
      dispatch(deleteCart(item));
   }
   const handleIncrease = (product) =>{
      dispatch(addCart(product));
   }
   const products = (product) => {
      return (
         <div className='px-4 my-5 bg-light rounded-3' key={product.id}>
            <div className="container py-4">
               <button onClick={() => handleClose(product)} className='btn btn-close float-end' aria-label='Close'></button>
               <div className='row justify-content-center'>
                  <div className="col-md-4">
                     <img src={product.image} alt={product.title} height="200px" width="180px" />
                  </div>
                  <div className='col-md-4'>
                     <h3>{product.title}</h3>
                     <p className='lead fw-bold'>
                        {product.qty} X ${product.price} = ${product.qty * product.price}
                     </p>
                     <button className='btn btn-outline-dark me-4' onClick={() => handleClose(product)}>
                        <i className='fa fa-minus'></i>
                     </button>
                     <button onClick={() => handleIncrease(product)} className='btn btn-outline-dark' >
                        <i className='fa fa-plus'></i>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      )
   }

   const EmptyCart = () => {
      return (
         <div className='px-4 my-5 bg-light rounded-3'>
            <div className="container py-4">
               <div className="row">
                  <h3>Your Cart is Empty</h3>
               </div>
            </div>
         </div>
      )
   }

   const Button = () => {
      return (
         <div className="container">
            <div className="row">
               <NavLink to="/checkout" className='btn btn-outline-dark mb-5 w-25 mx-auto'>Proceed To Checkout</NavLink>
            </div>
         </div>
      )
   }
   return (
      <>
         {state.length === 0 && <EmptyCart />}
         {state.length !== 0 && state.map(products)}
         {state.length !== 0 && <Button />}

      </>
   );
}

export default Cart;
