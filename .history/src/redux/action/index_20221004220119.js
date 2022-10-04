export const addCart = (product) =>{
   return{
      type:'cart/addProduct',
      payload:product
   }
};

export const deleteCart = (product) =>{
   return {
      type:'cart/deleteProduct',
      payload: product
   }
}