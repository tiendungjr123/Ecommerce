import React from 'react';

const Login = () => {
   return (
      <>
         <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#loginModal">
         <i className='fa fa-sign-in me-1'/>Login
         </button>
         <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h1 className="modal-title fs-5" id="loginModalLabel">Modal title</h1>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                     ...
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Login;
