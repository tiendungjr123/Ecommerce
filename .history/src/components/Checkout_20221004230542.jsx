import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
   const state = useSelector((state) => state.handleCart);
   var total = 0;
   const productList = (product) => {
      total = total + (product.qty*product.price);
      return (
         <li className='list-group-item d-flex justify-content-between lh-sm'>
            <div>
               <h6 className='my-0'>{product.title} x {product.qty}</h6>
            </div>
            <span className='text-muted'>${product.price}x{product.qty}</span>
         </li>
      )
   }
   return (
      <div className='container my-5'>
         <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
               <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span >Your cart</span>
                  <span className="badge bg-dark rounded-pill">{state.length}</span>
               </h4>
               <ul className="list-group mb-3">
                  {state.map(productList)}
                  <li className="list-group-item d-flex justify-content-between">
                     <span>Total (USD)</span>
                     <strong>${total}</strong>
                  </li>
               </ul>

               <form className="card p-2">
                  <div className="input-group">
                     <input type="text" className="form-control" placeholder="Promo code" />
                     <button type="submit" className="btn btn-secondary">Redeem</button>
                  </div>
               </form>
            </div>
            <div className="col-md-7 col-lg-8">
               <h4 className="mb-3">Billing address</h4>
               <form className="needs-validation" noValidate="">
                  <div className="row g-3">
                     <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input type="text" className="form-control" id="firstName"   required="" />
                        <div className="invalid-feedback">
                           Valid first name is required.
                        </div>
                     </div>

                     <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="lastName"  required="" />
                        <div className="invalid-feedback">
                           Valid last name is required.
                        </div>
                     </div>
                     <div className="col-12">
                        <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                        <div className="invalid-feedback">
                           Please enter a valid email address for shipping updates.
                        </div>
                     </div>

                     <div className="col-12">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                        <div className="invalid-feedback">
                           Please enter your shipping address.
                        </div>
                     </div>

                     <div className="col-12">
                        <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                     </div>
                  </div>
                  <hr className="my-4" />
                  <div className="form-check">
                     <input type="checkbox" className="form-check-input" id="same-address" />
                     <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                  </div>
                  <div className="form-check">
                     <input type="checkbox" className="form-check-input" id="save-info" />
                     <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                  </div>
                  <hr className="my-4" />
                  <h4 className="mb-3">Payment</h4>
                  <div className="my-3">
                     <div className="form-check">
                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                        <label className="form-check-label" htmlFor="credit">Credit card</label>
                     </div>
                     <div className="form-check">
                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                        <label className="form-check-label" htmlFor="debit">Debit card</label>
                     </div>
                     <div className="form-check">
                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                        <label className="form-check-label" htmlFor="paypal">PayPal</label>
                     </div>
                  </div>
                  <div className="row gy-3">
                     <div className="col-md-6">
                        <label htmlFor="cc-name" className="form-label">Name on card</label>
                        <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                        <small className="text-muted">Full name as displayed on card</small>
                        <div className="invalid-feedback">
                           Name on card is required
                        </div>
                     </div>

                     <div className="col-md-6">
                        <label htmlFor="cc-number" className="form-label">Credit card number</label>
                        <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                        <div className="invalid-feedback">
                           Credit card number is required
                        </div>
                     </div>

                     <div className="col-md-3">
                        <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                        <div className="invalid-feedback">
                           Expiration date required
                        </div>
                     </div>

                     <div className="col-md-3">
                        <label htmlFor="cc-cvv" className="form-label">CVV</label>
                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                        <div className="invalid-feedback">
                           Security code required
                        </div>
                     </div>
                  </div>
                  <hr className="my-4" />
                  <button className="w-100 btn btn-outline-dark btn-lg" type="submit">Continue to checkout</button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default Checkout;