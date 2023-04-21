import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/Cartaction"

const initialState = {
  cart: [],
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updateIndex = state.cart.findIndex((item) => item.id === action.payload.id)
      if (updateIndex >= 0) {
        const newCart = [...state.cart]
        newCart.splice(updateIndex, 1, action.payload) 
        // newCart.splice(updateIndex, 1)
        return { ...state, cart: newCart }
      } else {
        return { ...state, cart: [...state.cart, action.payload] }
      }
    default:
      return state
  }
}


