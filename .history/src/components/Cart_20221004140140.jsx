import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteCart } from '../redux/action/index'
const Cart = () => {
   const state = useSelector((state) => state.addCart);
   const dispatch = useDispatch();
   const handleClose = (item) => {
      dispatch(deleteCart(item));
   }
   const cartItems = (cartItem) => {
      return (
         <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
            <div className="container py-4">
               <button onClick={() => handleClose(cartItem)} className='btn btn-close float-end' aria-label='Close'></button>
               <div className='row justify-content-center'>
                  <div className="col-md-4">
                     <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                  </div>
                  <div className='col-md-4'>
                     <h3>{cartItem.title}</h3>
                     <p>${cartItem.price}</p>
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
         {/* {state.length === 0 && <EmptyCart/>} */}
         {state.map(cartItems)}
         <Button />
      </>
   );
}

export default Cart;
