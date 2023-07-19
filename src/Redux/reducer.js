const initialData={
    isLoading:false,
    isAuth:false,
    isError:false,
    productType:"trekking",
    products:[],
    singleProduct:{},
    cart:[]
}

const nameOfUser={
name:""
}
export const productReducer = (state=initialData,action)=>{
    if(action.type==="SUCCESS") {
        return {
            ...state,products:action.payload
        }
    }else if(action.type==="FAIL") {
        return {
            ...state,isError:action.payload
        }
    }else if(action.type==="LOADING") {
        return {
            ...state,isLoading:action.payload
        }
    }else if(action.type==="PRODUCT_TYPE") {
        return {
            ...state,productType:action.payload
        }
    }
    return state;
}
export const singleProductReducer = (state=initialData,action)=>{
    if(action.type==="SINGLE_SUCCESS") {
        return {
            ...state,singleProduct:action.payload
        }
    }else if(action.type==="SINGLE_FAIL") {
        return {
            ...state,isError:action.payload
        }
    }else if(action.type==="SINGLE_LOADING") {
        return {
            ...state,isLoading:action.payload
        }
    }else if(action.type==="PRODUCT_TYPE") {
        return {
            ...state,productType:action.payload
        }
    }
    return state;
}
export const nameReducer=(state=nameOfUser,{type,payload})=>{
    if(type=="changeName"){
        return{...state,name:payload}
    
    }
    return state;
}
