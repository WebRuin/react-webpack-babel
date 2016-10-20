import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class FooterStore extends EventEmitter {
 constructor() {
    super()
    this.state = {
      
    }
  }

  getState() {
    return this.state
  }

  handleAction(action) {
    switch(action.type) {
    }
  }
}

const footerStore = new FooterStore
dispatcher.register(footerStore.handleAction.bind(footerStore))
export default footerStore