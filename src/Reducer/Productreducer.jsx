import { FETCH_SUCCESS,FETCH_PENDING,FETCH_ERROR } from "../actions/Productaction"

const InitialState = {
    data : [],
    error:null,
    pending:false,
}

export const Productsreducer = (state=InitialState,action) => {
    switch (action.type) {
        case FETCH_PENDING:
        return {
            ...state,
            pending:true}
        case FETCH_SUCCESS:
        return {
            ...state, 
            data:action.payload, 
            pending:false,
            error:null}
        case FETCH_ERROR:
        return {...state,
            error:action.payload,
            pending:false}
        default:
        return state;
    }
}