export const cartReducer = ( state = { cartItems:[] }, action ) => {
   switch (action.type) {
       case 'CART_ADD_ITEMS':
           const item = action.payload
        const existItem =state.cartItems.find (
            (i) => i.product === item.product
        )
        if (existItem) {
            return {
                ...state ,
                cartItems : state.cartItems.map((i) =>
                i.product === existItem.product ? item : i
                ),
            }
        } else {
            return {
                ...state ,
                cartItems : [...state.cartItems , item]
            }
        }
        case 'REMOVE_FROM_CART':
        return {
            ...state,
            cartItems : state.cartItems.filter((i) => i.product !== action.payload),
        }
        default : 
        return state
   }
}