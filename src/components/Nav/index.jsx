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

        <h1>Rise Up</h1>
        <h3>
          Mustache austin roof party put a bird on it direct trade. Leggings echo park sartorial butcher. Narwhal deep v neutra disrupt banjo. Try-hard cronut knausgaard viral, cold-pressed photo booth bushwick raw denim. Quinoa taxidermy swag twee wayfarers, PBR&B typewriter farm-to-table mixtape ethical keffiyeh occupy. IPhone bushwick tacos, direct trade kitsch locavore beard listicle YOLO trust fund crucifix brunch.
        </h3>

        <SubNav />
      </section>
    )
  }
}
