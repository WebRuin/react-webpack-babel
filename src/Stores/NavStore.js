import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

// Nav styles
import styles from '../components/Nav/nav.scss'

class NavStore extends EventEmitter {
 constructor() {
    super()
    this.state = {
      currentUser: 'Welcome',
      loggedIn: false,
      signupMenuOpen: false,
      signupMenuClass: styles.signupMenu_Close,
      users: [],
      sub_content: 'homeless'
    }
  }

  handleAddUser(user) {
    console.log(user)
    this.state.users = this.state.users.concat(user)
    this.state.users = this.state.users.concat(user)
    this.setCurrentUser()
    this.handleLogin()
    this.emit('change')
  }

  getState() {
    return this.state
  }

  getCurrentUser() {
    return this.state.currentUser
  }

  handleLogin() {
    this.state.loggedIn = !this.state.loggedIn
    this.emit('change')
  }

  handleLogout() {
    this.state.loggedIn = !this.state.loggedIn
    this.emit('change')
  }

  handleSignupClick() {
    if ( this.state.signupMenuOpen ) {
      this.state.signupMenuOpen = !this.state.signupMenuOpen,
      this.state.signupMenuClass = styles.signupMenu_Close
    } else {
      this.state.signupMenuOpen = !this.state.signupMenuOpen,
      this.state.signupMenuClass = styles.signupMenu_Open
    }
    console.log(this.state.sub_content)
    this.emit('change')
  }

  setCurrentUser() {
    const thisUser = this.state.users.length
    this.state.currentUser = this.state.users[thisUser - 1].name
  }

  setSubContent( sub ) {
    this.state.sub_content = sub
    this.emit('change')
  }

  handleAction(action) {
    switch(action.type) {
      case 'TOOGLE_SIGNUP_MENU': {
        this.handleSignupClick()
        break
      }
      case 'TOOGLE_LOGIN': {
        this.handleLogin()
        break
      }
      case 'TOOGLE_LOGOUT': {
        this.handleLogout()
        break
      }
      case 'ADD_USER': {
        this.handleAddUser(action.payload)
        break
      }
      case 'CHANGE_SUB_CONTENT': {
        this.setSubContent(action.payload)
        break
      }
    }
  }
}

const navStore = new NavStore
dispatcher.register(navStore.handleAction.bind(navStore))
export default navStore