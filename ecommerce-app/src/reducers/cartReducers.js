import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      //id is the product === current item of the product
      const existItem = state.cartItems.find((x) => x.product === item.product)

      // Line 17 says that current item id is === existItem id, then return item else return x
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        //...state is whatever in the state already, ...state.cartItems is whatever items already in the cart, item is we are adding new item
        return { ...state, cartItems: [...state.cartItems, item] }
      }

    default:
      return state
  }
}
