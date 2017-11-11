const { SET_USER } = require('./constants')
const { combineReducers } = require('redux')
const { merge } = require('ramda')

export default combineReducers({
	user
})

function user(state = {}, action) {
	switch (action.type) {
		case SET_USER:
			return merge(state, {user: action.payload})
		default:
			return state
	}
}
