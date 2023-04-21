export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const REMOVE_ALL_CART_ITEMS = 'REMOVE_ALL_CART_ITEMS'


export const addToCart = (item) => {
    return {type:'ADD_TO_CART',payload:item}
}

export const RemoveCart = (id) => {
    return {type:'REMOVE_FROM_CART',payload:id}
}

export const EmptyCart = () => {
    return {type:'REMOVE_ALL_CART_ITEMS'}
}