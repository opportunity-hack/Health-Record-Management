
function getCookie (name)  {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if ( cookie.substring(0, name.length +1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length +1));
                break;
            }
        }
    }
    return cookieValue;
}

export const signIn = (userCredential) => {
    return (dispatch, getState) => {
        var csrftoken = getCookie('csrftoken')
        fetch('https://hrm-django.herokuapp.com/token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            }, 
            body: JSON.stringify(userCredential)
        })
        .then(res => res.json())
        .then(json => {
          if (!json.user) {
                console.log("user not found")
                dispatch({ type : 'ERROR'})
          } else {
            dispatch({ type : 'SIGN_IN'})
            console.log("found user, will log user in")
            if (json.user.is_admin === true) {
              localStorage.setItem('token', json.token);
              window.location.href = '/dhome'
             

    
            } else {
              localStorage.setItem('token', json.token);
              window.location.href = '/phome'
    
            }
          }
        })

    }
}

export const fetchUser = () => {

  return (dispatch, getState) =>  {
    fetch('https://hrm-django.herokuapp.com/api/current-user/', {
        headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
        } 
    })
    .then(res => res.json())
    .then(data => {
      dispatch({type : 'FETCH_USER', payload : data})
    })
    .catch(err => {dispatch({type : "ERROR"})})

  }
    
}


export const fetchUserAppointment = () => {
  
  return (dispatch, getState) =>  {
    fetch('https://schedapp1.herokuapp.com/getDocSched?id=41', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        } 
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      dispatch({type : 'FETCH_USER_APPT', payload : data})
    })
    .catch(err => {dispatch({type : "FETCH_USER_APPT_ERROR"})})

  }
    
}
export const scheduleAppt = (appt_detail) => {
  return (dispatch, getState) =>  {
    fetch('https://schedapp1.herokuapp.com/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appt_detail)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      dispatch({type : 'FETCH_USER_APPT', payload : data})
    })
    .catch(err => {dispatch({type : "FETCH_USER_APPT_ERROR"})})

  }
    
}

export const signUp = (userCredential) => {

    return (dispatch, getState) => {
        var csrftoken = getCookie('csrftoken')
        fetch('https://hrm-django.herokuapp.com/api/user-register/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(userCredential)
        })
    
        .then(res => res.json())
        .then(json => {
          if (Object.keys(json).length <= 10) {
            dispatch({ type : "ERROR"})
          } else {
            localStorage.setItem('token', json.token)
            dispatch({ type : "SIGN_UP"})
            window.location.href = '/'
          }
        })
    }
  
}

export const signOut = () => {
    return (dispatch, getState) => {
        localStorage.removeItem('token');
        dispatch({type : "SIGN_OUT"})
        window.location.href="/"
    }
}