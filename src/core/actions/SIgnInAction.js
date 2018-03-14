import {SIGN_IN,SHOW_LOADER,HIDE_LOADER,SIGN_IN_FAILURE} from '../CoreConstants';
import axios from'axios'

export function doSignIn(id,pass){
    console.log("in dosigin action thunk")
    //do firebase sign in and pass to reducers for state change
    return (dispatch)=>{
        dispatch(SHOW_LOADER)
        dispatch(signIn({
            first_name : "pranav",
            last_name : "dixit"
        }))
    }
}

function signIn(data){
    console.log("in sigin action")
    return {
        type : SIGN_IN,
        data
    }
}

function signInFailure(data){
    return {
        type : SIGN_IN_FAILURE,
        data
    }
}