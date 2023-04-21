import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { Productsreducer } from "../Reducer/Productreducer";
import { cartReducer } from "../Reducer/Cartreducer";

const reducer = combineReducers({
    Products : Productsreducer,
    Cart : cartReducer,
})

const InitialState = []
const middleware = [thunk]


export const store = createStore(
    reducer,
    InitialState,
    composeWithDevTools(applyMiddleware(...middleware))
)