const firstState = {
    signInLoading : false,
    signInError : false,
    logged_in: localStorage.getItem('token') ? true : false,
    userData : ''
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