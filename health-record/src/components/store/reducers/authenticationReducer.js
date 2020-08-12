const firstState = {
    signInLoading : false,
    signInError : false,
    logged_in: localStorage.getItem('token') ? true : false,
    userData : '',
    apptData : '',
    currentApptData : ''
}

const authenticationReducer = (state = firstState, action) => {
    switch(action.type) {
        case 'SIGN_IN' :
            console.log("User signed in...")
            return {
                ...state,
                logged_in : true,
            }
        case 'FETCH_USER' :
            return {
                ...state,
                userData : action.payload
            }
        case 'FETCH_USER_CURRENT_APPT' :
            console.log("succesfully getting user current appointment")
            return {
                ...state,
                currentApptData : action.payload
            }
        case 'CREATE_USER_APPT' :
            console.log("Appointment been scheduled")
            console.log(action.payload)
            return state

        case "CREATE_USER_APPT_ERROR" : 
            console.log("Error appointment hasn't been scheduled ")
            console.log(action.payload)
            return state

        case 'FETCH_USER_APPT' :
            console.log("User has been fetch with scheduled")
            console.log(action.payload)
            return {
                ...state,
                apptData : action.payload
            }
        case    "FETCH_USER_APPT_ERROR" :
            console.log("Fetching appointment error...")
            return state
        case 'SIGN_UP' :
            console.log("User signed up...")
            return {
                ...state,
                logged_in : true
            }
        case 'ERROR' :
            console.log("Signing in error...")
            return {
                ...state,
                signInError : true
            }
            case 'SIGN_OUT' :
                console.log("Signed out success...")
                return {
                    ...state,
                    logged_in : false
                }
            return state
            case 'SIGN_UP' :
                    console.log("Signed up success...")
                    return {
                        ...state,
                        logged_in : true
                    }
    }

    return state;
}

export default authenticationReducer;