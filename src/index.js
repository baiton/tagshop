import App from './app'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import store from './store.js'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from 'material-ui'

const Application = () => (
	<Provider store={store}>
		<MuiThemeProvider>
			<App />
		</MuiThemeProvider>
	</Provider>
)

ReactDOM.render(<Application />, document.getElementById('root'))

registerServiceWorker()
