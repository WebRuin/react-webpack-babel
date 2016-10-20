import React from 'react'

// Style
import styles from './index.scss'

// Comonents
import Nav from './components/Nav'
import Footer from './components/Footer'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Nav />

        { this.props.children }

        <Footer />
      </div>
    )
  }
}
