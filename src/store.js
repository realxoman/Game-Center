import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {productListReducer , productDetailReducer} from './reducer/productReducer'
import {cartReducer} from './reducer/cartReducer'

const reducer = combineReducers({
    productList : productListReducer,
   productDetail: productDetailReducer,
   cart : cartReducer,
})
const cartItemsLocalsrotage = localStorage.getItem('cartItems')
 ? JSON.parse(localStorage.getItem('cartItemS'))
  : []

const initialState = {
    cart : {cartItems : cartItemsLocalsrotage}
}
const midllewere = [thunk]

const store = createStore(reducer, initialState, applyMiddleware(...midllewere))
 
export default store