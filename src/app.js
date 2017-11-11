import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import history from './history'
import Home from './pages/Home'

import UserStore from './pages/UserStore'

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/" component={UserStore} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
