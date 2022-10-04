import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteCart} from '../redux/action/index'
const Cart = () => {
   const state = useSelector((state) => state.addCart)
   return (
      <div>
         
      </div>
   );
}

export default Cart;
