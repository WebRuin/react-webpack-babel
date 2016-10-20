import React from 'react'
import { Link } from 'react-router'

// Actions
import * as NavActions from '../../Actions/NavActions'

// Store
import NavStore from '../../Stores/NavStore'

// Styles
import styles from './nav.scss'

// Components
import UserSignupForm from './UserSignupForm'
import SubNav from './SubNav'

export default class Nav extends React.Component {
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

  handleLogin() {
    NavActions.toogleLogin()
  }

  handleLogout() {
    NavActions.toogleLogout()
  }

  handleSignpClick() {
    NavActions.toggleSignupMenu()
  }

  render() {
    let login = this.state.state.loggedIn ? '' : <button onClick={ this.handleLogin.bind(this) }>Login</button>
    let signup = this.state.state.loggedIn ? '' : <button onClick={ this.handleSignpClick.bind(this) }>Sign Up</button>
    let logout = this.state.state.loggedIn ? <button onClick={ this.handleLogout.bind(this) }>Logout</button>: ''

    return (
      <section className={ styles.header_wrap } >
        <header className={ styles.header }>
          <div className={ styles.logo }>
            Site
          </div>
          <div className={ styles.links }>
            <Link to='home'>Home</Link>
            <Link to='test'>Test</Link>
          </div>
          <div className={ styles.buttons }>
            <button>{ this.state.state.currentUser }</button>
            { login }
            { signup }
            { logout }
            <section className={ this.state.state.signupMenuClass }>
              <UserSignupForm
                handleLogin={ this.handleLogin.bind(this) }
                handleSignUpClick={ this.handleSignpClick.bind(this) }
              />
            </section>
          </div>
        </header>
        <SubNav />
      </section>
    )
  }
}
