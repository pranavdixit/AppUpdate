import {SIGN_IN,SHOW_LOADER,HIDE_LOADER,SIGN_IN_FAILURE} from '../CoreConstants';

const initialState = {
    first_name : "my",
    last_name :"name",
    loading : false,
    error: false
}

export default function ApiReducer(state= initialState, action){
    switch(action.type){
        case SHOW_LOADER:{
            return{
                ...state,
                loading:true
            }
        }
        case HIDE_LOADER:{
            return {
                ...state,
                loading:false
            }

        }
        case SIGN_IN:{
            return{
                ...state,
                first_name: action.data.first_name,
                last_name: action.data.last_name
            }
        }
        case SIGN_IN_FAILURE:{
            return{
                ...state,
                error:true
            }
        }
    default:{
        return{...state}
    }
    }
}