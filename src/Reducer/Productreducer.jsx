import { FETCH_SUCCESS,FETCH_PENDING,FETCH_ERROR,HIGHTOLOWPRICE,LOWTOHIGHPRICE } from "../actions/Productaction"

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
                pending:true
            }
        case FETCH_SUCCESS:
            return {
                ...state, 
                data:action.payload, 
                pending:false,
                error:null
            }
        case FETCH_ERROR:
            return {
                ...state,
                error:action.payload,
                pending:false
            }
        case HIGHTOLOWPRICE:
            const sortedHighLowData = [...state.data.products].sort((a, b) => b.price - a.price);
            return {
                ...state,
                data: {
                    ...state.data,
                    products: sortedHighLowData
                }
            }
            case LOWTOHIGHPRICE:
            const sortedLowHighData = [...state.data.products].sort((a, b) => a.price - b.price);
            return {
                ...state,
                data: {
                    ...state.data,
                    products: sortedLowHighData
                }
            }
        default:
            return state;
    }
}
