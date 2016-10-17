import React from 'react'
import styles from './index.scss'

// Components
import Nav from './components/Nav'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: 'Welcome',
      loggedIn: false,
      users: []
    }
  }

  addUser(user) {
    this.setState({
      users: this.state.users.push(user)
    })
    this.setCurrentUser()
  }

  setCurrentUser() {
    const thisUser = this.state.users.length
    this.setState({
      currentUser: this.state.users[thisUser - 1].name
    })
  }

  render() {
    return (
      <div>
        <Nav currentUser={ this.state.currentUser } addUser={ this.addUser.bind(this) } />
        <h1>It Works!</h1>
        <p>This React project just works including <span className={styles.blueBg}>module</span> local styles.</p>
        <p>Global bootstrap css import works too as you can see on the following button.</p>
        <p><a className="btn btn-primary btn-lg">Enjoy!</a></p>
      </div>
    )
  }
}
