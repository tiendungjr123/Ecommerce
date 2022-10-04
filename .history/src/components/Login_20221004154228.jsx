import React from 'react';

const Login = () => {
   return (
      <>
         <button type="button" className="btn btn-outline-dark ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
            <i className='fa fa-sign-in me-1' />Login
         </button>
         <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h1 className="modal-title fs-5" id="loginModalLabel">Login</h1>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                     <button className='btn btn-dark w-100 mb-2'>
                        <span className='fa fa-google me-2'>Sign in With Google</span>
                     </button>
                     <form>
                        <div class="mb-3">
                           <label for="exampleInputEmail1" class="form-label">Email address</label>
                           <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                           <label for="exampleInputPassword1" class="form-label">Password</label>
                           <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3 form-check">
                           <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                              <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-outline-dark w-100">Submit</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Login;
