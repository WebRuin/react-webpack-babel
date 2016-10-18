import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class UserStore extends EventEmitter {
  constructor() {
    super()
    this.state = {
      currentUser: 'Welcome',
      loggedIn: false,
      users: []
    }
  }

  handleLogin() {
    th
  }

  handleAction() {
    
  }
}

const userStore = new UserStore
dispatcher.register(userStore.handleAction.bind(userStore))
export default userStore