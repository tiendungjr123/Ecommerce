import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
const ProductDetail = () => {

   const { id } = useParams();
   const [product, setProduct] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const getProduct = async () => {
         
         const response = await fetch(`https://fakestoreapi.com/${id}`);
         setProduct(await response.json());
         setLoading(false);
      }
      getProduct();
   }, []);

   const Loading = () => {
      return (
         <>
            Loading...
         </>
      )
   }

   const ShowProduct = () => {
      return (
         <>

         </>
      )
   }
   return (
      <div>
         <div className="container">
            <div className="row">
               {loading ? <Loading /> : <ShowProduct />}
            </div>
         </div>
      </div>
   );
}

export default ProductDetail;
