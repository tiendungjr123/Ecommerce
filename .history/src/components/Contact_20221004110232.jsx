import React from 'react';

const Contact = () => {
   return (
      <div>
         <div className="container">
            <div className="row">
               <div className="col-12 text-center py-4 my-4">
                  <h1>Have Some Questions?</h1>
                  <hr />
               </div>
            </div>
            <div className='row'>
               <div className="col-md 5 d-flex justify-content-center">
                  <img src="/assets/contact1.jpg" alt="Contact Us" height="400px" width="400px" />
               </div>
               <div className="col-md-6">
                  <form>
                     <div class="mb-3">
                        <label for="exampleForm" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="exampleForm" placeholder="Tien Dung" />
                     </div>
                     <div class="mb-3">
                        <label for="exampleForm" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="exampleForm" placeholder="Tien Dung" />
                     </div>
                     <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Contact;
