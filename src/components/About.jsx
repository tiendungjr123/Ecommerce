import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
   return (
      <div>
         <div className="container my-5 py-5">
            <div className="row">
               <div className="col-md-6">
                  <h1 className=' fw-bold mb-4'>About Us</h1>
                  <p className='lead mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus obcaecati, nostrum magni blanditiis quas ullam similique nisi iure in repudiandae doloribus dicta. Assumenda, iure expedita a vel obcaecati omnis, repellendus unde voluptatibus, minima quisquam provident libero numquam aspernatur quas! Ab omnis repellat quas odio optio laboriosam aut expedita doloremque commodi? Esse odit doloribus animi maxime, perferendis pariatur id nulla a quisquam. Quos quae illo officia minus deleniti maiores dolorem reprehenderit voluptate, soluta eos amet dolor nesciunt eveniet cupiditate quas qui vitae libero voluptatibus quod et, labore sapiente. Maxime accusantium quas dicta corrupti totam placeat ea doloremque fuga nihil. Dicta?</p>
                  <NavLink to='/contact' className='btn btn-outline-dark px-3'>Contact Us</NavLink>
               </div>
               <div className="col-md-6 d-flex justify-content-center">
                  <img src="/assets/about.jpg" alt="About Us" height="400px" width="400px" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;
