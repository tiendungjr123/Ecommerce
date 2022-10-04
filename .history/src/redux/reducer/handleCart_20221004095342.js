const cart = [];

const handleCart = (state = cart, action){
   const product = action.payload;
   switch (action.type) {
      case 'cart/addProduct':
         const exits = state.find((x) => x.id === product.id);
         if (exits) {
            return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
         }else{
            const product = action.payload;
            return [
               ...state,
               {
                  ...product,
                  qty: 1,
               }
            ]
         }
         break;
      default:
         break;
   }
}