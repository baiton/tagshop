const fetch = require('isomorphic-fetch')
const { SET_USER } = require('./constants')
const apiURL = 'http://tagshop.co/api/'

const getOptions = (token, method = 'GET', body = null) => {
	return {
		method,
		headers: {
			//'Content-Type': 'application/json'
			//Authorization: 'Bearer ' + token
			//Access-Control-Allow-Origin
		},
		body: body && JSON.stringify(body)
	}
}

export const getUser = user => (dispatch, getState) => {
	fetch(apiURL + 'ig/media/' + user, getOptions(getState()))
		.then(res => res.json())
		.then(data => dispatch({ type: SET_USER, payload: data }))
}
