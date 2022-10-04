import React, { useState, useEffect } from 'react'

const Products = () => {

   const [data, setData] = useState([]);
   const [filter, setFilter] = useState(data);
   const [loading, setLoading] = useState(false);
   let componentMounted = true;

   useEffect(() => {
      const getProducts = async () => {
         setLoading(true);
         const response = await fetch("https://fakestoreapi.com/products");
         if (componentMounted) {
            setData(await response.clone().json());
            setFilter(await response.json());
            setLoading(false);
         }
         return () => {
            componentMounted = false;
         }
      }
      getProducts();
   }, []);

   const Loading = () => {
      return (
         <>
            Loading...
         </>
      )
   }

   const ShowProducts = () => {
      return (
         <>
            <div className="buttons d-flex justify-content-center mb-5 pd-5">
               <button className='btn btn-outline-dark me-2'>ALL</button>
               <button className='btn btn-outline-dark me-2'>Men's Clothing</button>
               <button className='btn btn-outline-dark me-2'>Women's Clothing</button>
               <button className='btn btn-outline-dark me-2'>Jewelery</button>
               <button className='btn btn-outline-dark me-2'>Electronic</button>
            </div>
            {filter.map((product) =>{
               return (
                  <>
                     
                  </>
               )
            })}
         </>
      )
   }
   return (
      <div>
         <div className="container my-5 py-5">
            <div className="row">
               <div className="col-12 mb-5">
                  <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                  <hr />
               </div>
            </div>
            <div className="row justify-content-center">
               {loading ? <Loading /> : <ShowProducts />}
            </div>
         </div>
      </div>
   )
}

export default Products
