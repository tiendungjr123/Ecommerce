import React from 'react';

const Register = () => {
   return (
      <>
         <button type="button" className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#registerModal">
            <i className='fa fa-user-plus me-1'></i>Register
         </button>
         <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h1 className="modal-title fs-5 fw-bold" id="registerModalLabel">Register</h1>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                     <button className='btn btn-dark w-100 mb-2'>
                        <i className='fa fa-google me-2'></i>Sign up With Google
                     </button>
                     <button className='btn btn-dark w-100 mb-2'>
                        <i className='fa fa-facebook me-2'></i>Sign up With Facebook
                     </button>
                     <form>
                        <div className="mb-3">
                           <label htmlFor="exampleInput" className="form-label">User Name</label>
                           <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                           <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-outline-dark w-100">Submit</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Register;
