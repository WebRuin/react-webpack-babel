import React from 'react'
import styles from './style.scss'

// Nav Store
import NavStore from '../../../Stores/NavStore'

// Sub Pages
import Homeless from './Sub_Pages/Homeless'
import MentalHealth from './Sub_Pages/MentalHealth'
import FoodServices from './Sub_Pages/FoodServices'
import Community from './Sub_Pages/Community'
import County from './Sub_Pages/County'
import Public from './Sub_Pages/Public'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      state: NavStore.getState(),
      content: <Homeless />
    }
  }

  componentWillMount() {
    NavStore.on('change', () => {
      this.setState({
         state: NavStore.getState()
      })
      switch(this.state.state.sub_content) {
        case 'homeless': {
          this.state.content = <Homeless />
          break
        }
        case 'mental': {
          console.log('mental')
          this.state.content = <MentalHealth />
          break
        }
        case 'food': {
          this.state.content = <FoodServices />
          break
        }
        case 'community': {
         this.state.content = <Community />
          break
        }
        case 'county': {
          this.state.content = <County />
          break
        }
        case 'public': {
          this.state.content = <Public />
          break
        }
      }
    })
  }

  render() {
    let content = <Homeless />
    return(
     <div>{this.state.content}</div>
    )
  }
}