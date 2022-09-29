import * as types from "./action_types"


const init_state={
    "isloading":false,
    "isError":false,
    "partnership":[],
    "trip":[],
    "india":[],
    "hotels":[],
    "bookhotels":[]
}

export const reducer= (state= init_state, action)=>{

    const  {type,payload} = action

    switch(type){

        // partnership 

        case types.REQ_PARTNERSHIPS_DATA:{
            return {...state, isloading: true}
        }

        case types.GET_PARTNERSHIPS_DATA:{
            return {...state, partnership: payload, isloading:false }
        }

        case types.FAIL_PARTNERSHIPS_DATA:{
            return {...state, partnership: [], isError:true }
        }

        // trip 

        case types.REQ_TRIP_DATA:{
            return {...state, isloading: true}
        }

        case types.GET_TRIP_DATA:{
            return {...state, trip: payload, isloading:false }
        }

        case types.FAIL_TRIP_DATA:{
            return {...state, trip: [], isError:true }
        }

        // india

        case types.REQ_INDIA_DATA:{
            return {...state, isloading: true}
        }

        case types.GET_INDIA_DATA:{
            return {...state, india: payload, isloading:false }
        }

        case types.FAIL_INDIA_DATA:{
            return {...state, india: [], isError:true }
        }

        // hotels

        case types.REQ_HOTELS_DATA:{
            return {...state, isloading: true}
        }

        case types.GET_HOTELS_DATA:{
            return {...state, partnership: payload, isloading:false }
        }

        case types.FAIL_HOTELS_DATA:{
            return {...state, partnership: [], isError:true }
        }

        // bookhotels

        case types.REQ_BOOKHOTELS_DATA:{
            return {...state, isloading: true}
        }

        case types.GET_BOOKHOTELS_DATA:{
            return {...state, bookhotels: payload, isloading:false }
        }

        case types.FAIL_BOOKHOTELS_DATA:{
            return {...state, bookhotels: [], isError:true }
        }


        default : return state
    }

}