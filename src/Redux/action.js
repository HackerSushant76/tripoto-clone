import axios from "axios"



const getPartnership =(dispatch)=>{

    dispatch({type:"REQ_PARTNERSHIP_DATA"})
    axios.get("").then((res)=>{
        dispatch({type:"GET_PARTNERSHIP_DATA", payload: res.data})
    })
    .catch((err)=>{
        dispatch({type:"FAIL_PARTNERSHIP_DATA"})
    })
}

const getTrip =(dispatch)=>{

    dispatch({type:"REQ_TRIP_DATA"})
    axios.get("").then((res)=>{
        dispatch({type:"GET_TRIP_DATA", payload: res.data})
    })
    .catch((err)=>{
        dispatch({type:"FAIL_TRIP_DATA"})
    })
}

const getIndia =(dispatch)=>{

    dispatch({type:"REQ_INDIA_DATA"})
    axios.get("").then((res)=>{
        dispatch({type:"GET_INDIA_DATA", payload: res.data})
    })
    .catch((err)=>{
        dispatch({type:"FAIL_INDIA_DATA"})
    })
}

const getHotels =(dispatch)=>{

    dispatch({type:"REQ_HOTELS_DATA"})
    axios.get("").then((res)=>{
        dispatch({type:"GET_HOTELS_DATA", payload: res.data})
    })
    .catch((err)=>{
        dispatch({type:"FAIL_HOTELS_DATA"})
    })
}

const getBookHotels =(dispatch)=>{

    dispatch({type:"REQ_BOOKHOTELS_DATA"})
    axios.get("").then((res)=>{
        dispatch({type:"GET_BOOKHOTELS_DATA", payload: res.data})
    })
    .catch((err)=>{
        dispatch({type:"FAIL_BOOKHOTELS_DATA"})
    })
}
