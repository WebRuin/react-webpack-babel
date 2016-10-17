import React from 'react'

// Style
import styles from './index.scss'

// Components
import Nav from './components/Nav'

export default class Layout extends React.Component {
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
    this.loggMeIn()
  }

  loggMeIn() {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  setCurrentUser() {
    const thisUser = this.state.users.length
    this.setState({
      currentUser: this.state.users[thisUser - 1].name
    })
  }

  render() {
    const user = this.state.loggedIn ? this.state.currentUser : ''
    const userSplit = user.split(' ')

    return (
      <div>
        <Nav currentUser={ this.state.currentUser } addUser={ this.addUser.bind(this) } />
        <h1>Welcome, { userSplit[0] }</h1>
        <p>This React project just works including <span className={styles.blueBg}>module</span> local styles.</p>
        <p>Global bootstrap css import works too as you can see on the following button.</p>
        <p><a className="btn btn-primary btn-lg">Enjoy!</a></p>
        { this.props.children }
      </div>
    )
  }
}
