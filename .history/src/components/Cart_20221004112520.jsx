import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteCart} from '../redux/action/index'
const Cart = () => {
   const state = useSelector((state) => state.addCart);
   const dispatch = useDispatch();

   const cartItems = (cartItem) =>{
      return (
         <div className='px-4 my-5 bg-light rounded-3'>
            <div className="container py-4">
               <button className='btn btn-close float-end' aria-label='Close'></button>
               <div className='row justify-content-center'>
                  <div className='col-md-4'>
                     <h3></h3>
                     <p></p>
                  </div>
               </div>
            </div>
         </div>
      )
   }
   return (
      <>
         {/* {state.length !==0 && state.map(cartItems)} */}
         dsfsd
      </>
   );
}

export default Cart;
