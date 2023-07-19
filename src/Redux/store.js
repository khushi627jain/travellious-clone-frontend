import { legacy_createStore as createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { productReducer,singleProductReducer,nameReducer } from "./reducer"


const combineReducer=combineReducers({
    productReducer,
    singleProductReducer,
    nameReducer
})

export const store=createStore(combineReducer,applyMiddleware(thunk));