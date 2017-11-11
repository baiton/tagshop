import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import history from './history'
import Home from './pages/home'

const App = () => {
	return (
		<BrowserRouter history={history}>
			<div>
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
