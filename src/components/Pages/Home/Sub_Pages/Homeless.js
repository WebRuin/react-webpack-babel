import React from 'react'
import styles from './styles.scss'

// Nav Store
import NavStore from '../../../../Stores/NavStore'

export default class Homeless extends React.Component {
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
	      <h1>Homeless</h1>
	      <h3>asdsd dgdfg dg gdfgf gdfg</h3>
	      <p>Mustache austin roof party put a bird on it direct trade. Leggings echo park sartorial butcher. Narwhal deep v neutra disrupt banjo. Try-hard cronut knausgaard viral, cold-pressed photo booth bushwick raw denim. Quinoa taxidermy swag twee wayfarers, PBR&B typewriter farm-to-table mixtape ethical keffiyeh occupy. IPhone bushwick tacos, direct trade kitsch locavore beard listicle YOLO trust fund crucifix brunch. Meggings mixtape kogi sriracha, next level portland small batch asymmetrical deep v fashion axe put a bird on it gastropub.
        </p>
        <p>
        Listicle banjo vinyl thundercats trust fund polaroid kogi. Mumblecore cred stumptown cliche williamsburg ethical, cronut crucifix marfa. Authentic scenester crucifix distillery messenger bag gastropub cardigan. Kombucha whatever pug, health goth mumblecore beard semiotics kale chips truffaut microdosing pop-up venmo everyday carry celiac. Truffaut vinyl leggings, squid venmo photo booth wayfarers mumblecore literally everyday carry yuccie umami. Microdosing tacos narwhal man bun you probably haven't heard of them, umami locavore disrupt brunch blue bottle tilde truffaut twee chambray. Bitters kale chips listicle you probably haven't heard of them, echo park wayfarers viral wolf before they sold out cornhole taxidermy pabst locavore literally.</p>
	    </article>
    )
  }
}