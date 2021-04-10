import { CART_ADD_ITEM } from '../constants/cartConstants'
import axios from 'axios'

//action creators
//id,qty from screen url, getState helps us to grab the entire state tree(productList,productDetails,cart)
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  //once dispatch is done, we save in localstorage api, we want to save the entire cart-->getState().cart.cartItems in our state.

  //we can only save strings in localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

//error.response.data.message is the message we see in the backend message
