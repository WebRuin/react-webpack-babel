import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Root Components
import Layout from './Layout'

// Page Routes
import Home from './components/Pages/Home'
import Test from './components/Pages/Test'

// Sub Pages
import Community from './components/Pages/Home/Sub_Pages/Community.js'
import County from './components/Pages/Home/Sub_Pages/County.js'
import FoodServices from './components/Pages/Home/Sub_Pages/FoodServices.js'
import Homeless from './components/Pages/Home/Sub_Pages/Homeless.js'
import MentalHealth from './components/Pages/Home/Sub_Pages/MentalHealth.js'
import Public from './components/Pages/Home/Sub_Pages/Public.js'

const app = document.querySelector("#app")

render(
  <Router history={ hashHistory }>
    <Route path='/' component={ Layout }>
      <IndexRoute component={ Home }></IndexRoute>
      <Route path='home' component={ Home }></Route>
      <Route path='test' component={ Test }></Route>
    </Route>
  </Router>, 
app)
