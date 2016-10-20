import React from 'react'
import { Link } from 'react-router'

// Actions
import * as FooterActions from '../../Actions/FooterActions'

// Store
import FooterStore from '../../Stores/FooterStore'

// Styles
import styles from './footer.scss'

export default class Footer extends React.Component {
  constructor() {
    super()
    this.state = {
      state: FooterStore.getState()
    }
  }

  componentWillMount() {
    FooterStore.on('change', () => {
      this.setState({
        state: FooterStore.getState()
      })
    })
  }

  render() {

    return (
      <footer className={ styles.footer }>
        
      </footer>
    )
  }
}
