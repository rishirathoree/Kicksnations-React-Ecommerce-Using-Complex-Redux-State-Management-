import { ADD_TO_CART, REMOVE_ALL_CART_ITEMS, REMOVE_FROM_CART } from "../actions/Cartaction"

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
      case REMOVE_FROM_CART:
        return {...state,
          cart : state.cart.filter((items)=>items.id !== action.payload)}
      case REMOVE_ALL_CART_ITEMS:
        return {...state,cart:[]}
    default:
      return state
  }
}


