import axios from "axios"

export const FETCH_PENDING = 'FETCH_PENDING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'
export const HIGHTOLOWPRICE = 'HIGHTOLOWPRICE'
export const LOWTOHIGHPRICE = 'LOWTOHIGHPRICE'



const FetchPending = () => {
    return {type:'FETCH_PENDING'}
}

const FetchSuccess = (data) => {
    return {type:'FETCH_SUCCESS',payload:data}
}
const FetchError = (error) => {
    return {type:'FETCH_ERROR',payload:error}
}
export const Hightolow = () => {
    return {type:'HIGHTOLOWPRICE'}
}
export const lowToHigh = () => {
    return {type:'LOWTOHIGHPRICE'}
}


export const FetchUser = () => {
    return async (dispatch) => {
        dispatch(FetchPending())
        try{
        const response = await axios.get('https://dummyjson.com/products')
        dispatch(FetchSuccess(response.data))
        }
        catch (error) {
            dispatch(FetchError(error))
          }
    }
}