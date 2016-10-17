import React from 'react'
import { Link } from 'react-router'

// Styles
import styles from './nav.scss'

// Components
import UserSignupForm from './UserSignupForm'

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      signupMenuOpen: false,
      signupMenuClass: styles.signupMenu_Close
    }
  }

  handleLogin() {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  handleLogout() {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  handleAddUser(user) {
    this.prop.addUser(user)
  }

  handleSignUpClick() {
    event.defaultPrevented

    if ( this.state.signupMenuOpen ) {
      this.setState({
        signupMenuOpen: !this.state.signupMenuOpen,
        signupMenuClass: styles.signupMenu_Close
      })
    } else {
      this.setState({
        signupMenuOpen: !this.state.signupMenuOpen,
        signupMenuClass: styles.signupMenu_Open
      })
    }
  }

  render() {
    let login = this.state.loggedIn ? '' : <button onClick={ this.handleLogin.bind(this) }>Login</button>
    let signup = this.state.loggedIn ? '' : <button onClick={ this.handleSignUpClick.bind(this) }>Sign Up</button>
    let logout = this.state.loggedIn ? <button onClick={ this.handleLogout.bind(this) }>Logout</button>: ''

    return (
      <header className={ styles.header }>
        <div className={ styles.logo }>
          Site
        </div>
        <div className={ styles.links }>
          <Link to='home'>Home</Link>
          <Link to='test'>Test</Link>
          <a href='/#'>Link 1</a>
          <a href='/#'>Link 2</a>
          <a href='/#'>Link 3</a>
          <a href='/#'>Link 4</a>
        </div>
        <div className={ styles.buttons }>
          <button>{ this.props.currentUser }</button>
          { login }
          { signup }
          { logout }
          <section className={ this.state.signupMenuClass }>
            <UserSignupForm addUser={ this.props.addUser }
              handleLogin={ this.handleLogin.bind(this) }
              handleSignUpClick={ this.handleSignUpClick.bind(this) }
            />
          </section>
        </div>
      </header>
    )
  }
}
