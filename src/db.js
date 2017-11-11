const fetch = require('isomorphic-fetch')
const { SET_USER } = require('./constants')
const apiURL = 'http://tagshop.co/api/'

const getOptions = (token, method = 'GET', body = null) => {
	return {
		method,
		headers: {},
		body: body && JSON.stringify(body)
	}
}

export const getUser = user => (dispatch, getState) => {
	if (user.length > 0) {
		fetch(apiURL + 'ig/media/' + user, getOptions(getState()))
			.then(res => res.json())
			.then(data => dispatch({ type: SET_USER, payload: data }))
			// .catch(err => console.log(err))
	}
}
