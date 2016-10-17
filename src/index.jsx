import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Root Components
import Layout from './Layout'

// Page Routes
import Home from './components/Pages/Home'
import Test from './components/Pages/Test'

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
