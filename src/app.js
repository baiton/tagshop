import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//this indicates we default to lightBaseTheme
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Verify from './pages/verify'
import UserStore from './pages/UserStore'
import Cart from './pages/cart'

const App = () => {

//This is the default light color scheme with our pink and blue replacements
// Pass overwrites to as props then call them back when needed.
//=============Example===============
						// const DeepDownTheTree = (props) => (
						// <span style={{color: props.getTheme.palette.primary1Color}}>
						// 	Hello World!
						// </span>
						// );
//=============Example===============
		const getTheme = () => {
		  let overwrites = {
		    "palette": {
		        "primary1Color": "#FF008A",
		        "primary2Color": "#A9005B",
						"primary3Color": "#bdbdbd",
		        "accent1Color": "#00D2FF",
		        "accent2Color": "#005162",
		        "accent3Color": "#616161"
		    }
		};
		  return getMuiTheme(baseTheme, overwrites);
		}

	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/:username/verify" component={Verify} />
					<Route path="/cart" component={Cart} />
					<Route path="/:username" muiTheme={getTheme} component={UserStore} />
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
