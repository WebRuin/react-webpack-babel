import React from 'react'
import styles from './style.scss'

export default class Home extends React.Component {
  render() {
    return(
      <section className={ styles.homeWrapper }>
        <h1>Welcome, Home</h1>
        <p>This React project just works including <span className={styles.blueBg}>module</span> local styles.</p>
        <p>Global bootstrap css import works too as you can see on the following button.</p>
        <p><a className="btn btn-primary btn-lg">Enjoy!</a></p>
      </section>
    )
  }
}