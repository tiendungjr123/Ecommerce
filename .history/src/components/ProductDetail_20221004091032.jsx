import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router';
const ProductDetail = () => {

   const {id} = useParams();
   const [product, setProduct] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() =>{
      const getProduct = async () =>{
         setLoading(true);
         const response = await fetch(`https://fakestoreapi.com/${id}`);
         setProduct(await response.json());
         setLoading(false);
      }
      getProduct();
   },[])
   return (
      <div>
         
      </div>
   );
}

export default ProductDetail;
