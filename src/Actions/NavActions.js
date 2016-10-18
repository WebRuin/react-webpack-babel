import dispatcher from '../dispatcher'

export function toggleSignupMenu(){
  dispatcher.dispatch({
    type: 'TOOGLE_SIGNUP_MENU'
  })
}

export function toogleLogin() {
  dispatcher.dispatch({
    type: 'TOOGLE_LOGIN'
  })
}

export function toogleLogout() {
  dispatcher.dispatch({
    type: 'TOOGLE_LOGOUT'
  })
}

export function addUser(payload) {
  dispatcher.dispatch({
    type: 'ADD_USER',
    payload
  })
}