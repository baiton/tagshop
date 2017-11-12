const { SET_USER, SET_CART } = require('./constants')
const { combineReducers } = require('redux')
const { merge, append } = require('ramda')

export default combineReducers({
	user,
	cart
})

function user(state = {}, action) {
	switch (action.type) {
		case SET_USER:
			return merge(state, { user: action.payload })
		default:
			return state
	}
}

function cart(state = [], action) {
	console.log('action.payload', action.payload)
	switch (action.type) {
		case SET_CART:
			return append(action.payload, state)
		default:
			return state
	}
}
