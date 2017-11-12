const { SET_USER, SET_CART, CLEAR_CART, SET_EMAIL, SET_INSTA } = require('./constants')
const { combineReducers } = require('redux')
const {
	merge,
	append,
	drop,
	findIndex,
	propEq,
	pathOr,
	map,
	compose,
	pathEq,
	remove
} = require('ramda')

export default combineReducers({
	user,
	cart,
	email,
	insta
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
	switch (action.type) {
		case SET_CART:
			return append(action.payload, state)
		case CLEAR_CART:
			const idx = findIndex(propEq('media_id', action.payload.id))(
				action.payload.cartObj.cart
			)
			return remove(idx, 1, action.payload.cartObj.cart)
		default:
			return state
	}
}

function email(state = {}, action) {
	switch (action.type) {
		case SET_EMAIL:
			return merge(state, { email: action.payload})
		default:
			return state
	}
}

function insta(state = {}, action) {
	switch (action.type) {
		case SET_INSTA:
			return merge(state, { insta: action.payload })
		default:
			return state
	}
}
