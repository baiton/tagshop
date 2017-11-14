const fetch = require('isomorphic-fetch')
const { SET_USER } = require('./constants')
const apiURL = 'https://tagshop.co/api/'

const getOptions = (token, method = 'GET', body = null) => {
	return {
		method,
		headers: {},
		body: body && JSON.stringify(body)
	}
}

// const sendOptions = (token, method = 'POST', body = null) => {
// 	return {
// 		method,
// 		headers: {},
// 		body: body && JSON.stringify(body)
// 	}
// }

export const getUser = user => (dispatch, getState) => {
	if (user.length > 0) {
		fetch(apiURL + 'ig/media/' + user, getOptions(getState()))
			.then(res => res.json())
			.then(data => dispatch({ type: SET_USER, payload: data }))
			.catch(err => console.log(err))
	}
}

// export const sendEmail = data => (dispatch, getState) => {
// 		fetch(apiURL + 'ig/media/' + user, sendOptions(getState()))
// 			.then(res => res.json())
// 			.then(data => dispatch({ type: SET_INSTA, payload: data }))
// 			.catch(err => console.log(err))
// }
//
// export const sendInsta = data => (dispatch, getState) => {
// 		fetch(apiURL + 'ig/media/' + user, sendOptions(getState()))
// 			.then(res => res.json())
// 			.then(data => dispatch({ type: SET_EMAIL, payload: data }))
// 			.catch(err => console.log(err))
// }
