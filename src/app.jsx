import React from 'react'
import styles from './index.scss'

// Components
import Nav from './components/Nav'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: {
        name: 'Tim Smith',
        email: 'tim.smith.hdg@gmail.com',
        password: '1234567890'
      },
      loggedIn: false,
      users: [
        {
          name: 'Tim Smith',
          email: 'tim.smith.hdg@gmail.com',
          password: '1234567890'
        }
      ]
    }
  }

  addUser(user) {
    this.setState({
      users: this.state.users.concat([user])
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
