import React from 'react'

// Style
import styles from './index.scss'

// Actions
import * as NavActions from './Actions/NavActions'

// Nav Store
import NavStore from './Stores/NavStore'

// Comonents
import Nav from './components/Nav'

export default class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      state: NavStore.getState()
    }
  }

  componentWillMount() {
    NavStore.on('change', () => {
      this.setState({
        state: NavStore.getState()
      })
    })
  }

  render() {
    const user = this.state.state.loggedIn ? this.state.state.currentUser : ''
    const userSplit = user.split(' ')

    return (
      <div>
        <Nav />
        <h1>Welcome, { userSplit[0] }</h1>
        <p>This React project just works including <span className={styles.blueBg}>module</span> local styles.</p>
        <p>Global bootstrap css import works too as you can see on the following button.</p>
        <p><a className="btn btn-primary btn-lg">Enjoy!</a></p>
        { this.props.children }
      </div>
    )
  }
}
