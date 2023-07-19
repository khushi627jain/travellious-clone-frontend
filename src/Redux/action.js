import axios from "axios";


export const productAction = (type,sort)=>{
    let url = "https://travelious-backend-server.onrender.com/"
    

    if(type==="trekking"){
        url+="trekking/"
    }else if(type==="camping"){
        url+="camping/"
    }else if(type==="activities"){
        url+="activities/"
    }
    if(sort!=="") {
        url+=`?_sort=price&_order=${sort}`
    }
    
    
    
    
    return (dispatch)=>{
        dispatch({type:"LOADING",payload:true})

            axios.get(url).then((res)=>{
                dispatch({type:"SUCCESS",payload:res.data})
            }).catch((error)=>{
                console.log(error);
                dispatch({type:"FAIL",payload:true})
            })
            
        dispatch({type:"LOADING",payload:false})
    }
}
export const singleProductAction = (type,id)=>{
    let url = "https://travelious-backend-server.onrender.com/"
    if(type==="trekking"){
        url+="trekking/"
    }else if(type==="camping"){
        url+="camping/"
    }else if(type==="activities"){
        url+="activities/"
    }

    url+=`${id}`
    
    return (dispatch)=>{
        dispatch({type:"SINGLE_LOADING",payload:true})

            axios.get(url).then((res)=>{
                // console.log(res.data)
                dispatch({type:"SINGLE_SUCCESS",payload:res.data})
            }).catch((error)=>{
                console.log(error);
                dispatch({type:"SINGLE_FAIL",payload:true})
            })
            
        dispatch({type:"SINGLE_LOADING",payload:false})
    }
}




