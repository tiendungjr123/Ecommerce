export const addCart = (product) =>{
   return{
      type:'cart/addProduct',
      paload:product
   }
}

export const deleteCart = (product) =>{
   return {
      type:'cart/deleteProduct',
      payload: product
   }
}