import React from 'react'
import styles from './styles.scss'

// Nav Store
import NavStore from '../../../../Stores/NavStore'

export default class MentalHealth extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: NavStore.getCurrentUser()
    }
  }

  componentWillMount() {
    NavStore.on('change', () => {
      this.setState({
         currentUser: NavStore.getCurrentUser()
      })
    })
  }

  setUserName() {
    if ( this.state.currentUser === 'Welcome' ) {
      return 'Please Signup or Login'
    } else {
      const splitUser = this.state.currentUser.split(' ')
      const firstName = splitUser[0]
      return firstName
    }
  }

  render() {
    return(
      <article className="main-article">
	      <h1>Mental Health</h1>
	      <h3>asdsd dgdfg dg gdfgf gdfg</h3>
	      <p>Listicle banjo vinyl thundercats trust fund polaroid kogi. Mumblecore cred stumptown cliche williamsburg ethical, cronut crucifix marfa. Authentic scenester crucifix distillery messenger bag gastropub cardigan. Kombucha whatever pug, health goth mumblecore beard semiotics kale chips truffaut microdosing pop-up venmo everyday carry celiac. Truffaut vinyl leggings, squid venmo photo booth wayfarers mumblecore literally everyday carry yuccie umami. Microdosing tacos narwhal man bun you probably haven't heard of them, umami locavore disrupt brunch blue bottle tilde truffaut twee chambray. Bitters kale chips listicle you probably haven't heard of them, echo park wayfarers viral wolf before they sold out cornhole taxidermy pabst locavore literally.</p>
	    </article>
    )
  }
}