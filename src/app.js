import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Verify from './pages/verify'
import UserStore from './pages/UserStore'
import Cart from './pages/cart'

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/verify" component={Verify} />
					<Route path="/cart" component={Cart} />
					<Route path="/:username" component={UserStore} />
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
