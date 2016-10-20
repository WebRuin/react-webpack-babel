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

export default class SubNav extends React.Component {
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

  handleSubContent(e) {
    console.log(e)
  }

  setContentHomeless() {
    NavActions.setSubContent('homeless')
  }

  setContentMental() {
    NavActions.setSubContent('mental')
  }

  setContentFood() {
    NavActions.setSubContent('food')
  }

  setContentCommunity() {
    NavActions.setSubContent('community')
  }

  setContentCounty() {
    NavActions.setSubContent('county')
  }

  setContentPublic() {
    NavActions.setSubContent('public')
  }

  render() {
    return (
      <header className={ styles.sub_header } >
        <button className={ styles.button } onClick={ this.setContentHomeless.bind(this) } >Homeless</button>
        <button className={ styles.button } onClick={ this.setContentMental.bind(this) } >Mental Health</button>
        <button className={ styles.button } onClick={ this.setContentFood.bind(this) } >Food Services</button>
        <button className={ styles.button } onClick={ this.setContentCommunity.bind(this) } >Community Services</button>
        <button className={ styles.button } onClick={ this.setContentCounty.bind(this) } >County Services</button>
        <button className={ styles.button } onClick={ this.setContentPublic.bind(this) } >Public Awareness</button>
      </header>
    )
  }
}
