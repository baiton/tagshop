import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import history from './history'
import Home from './pages/home'

import UserStore from './pages/UserStore'
import Cart from './pages/cart'

const App = () => {
  return (
    <BrowserRouter history={history}>
      <div>
        <Switch>
          <Route path="/store/cart" component={Cart} />
          <Route path="/" component={UserStore} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
