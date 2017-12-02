import App from './app'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import store from './store.js'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from 'material-ui'
import { StripeProvider } from 'react-stripe-elements'

const Application = () => (
	<Provider store={store}>
		<StripeProvider apiKey={'1234'}>
			<MuiThemeProvider>
				<App />
			</MuiThemeProvider>
		</StripeProvider>
	</Provider>
)

ReactDOM.render(<Application />, document.getElementById('root'))

registerServiceWorker()
