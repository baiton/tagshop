const {
	SET_USER,
	CLEAR_USER,
	SET_CART,
	CLEAR_CART,
	CLEAR_CART_X,
	SET_EMAIL,
	SET_INSTA,
	CLEAR_INSTA,
	CLEAR_EMAIL,
	CLEAR_VERIFY,
	SET_VERIFY
} = require('./constants')
const { combineReducers } = require('redux')
const {
	merge,
	append,
	findIndex,
	propEq,
	remove,
	pathOr,
	map
} = require('ramda')

export default combineReducers({
	user,
	cart,
	email,
	insta,
	verify
})

function user(state = {}, action) {
	switch (action.type) {
		case SET_USER:
			return merge(state, { user: action.payload })
		case CLEAR_USER:
			return {}
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

function email(state = '', action) {
	switch (action.type) {
		case SET_EMAIL:
			return action.payload
		case CLEAR_EMAIL:
			return ''
		default:
			return state
	}
}

function insta(state = '', action) {
	switch (action.type) {
		case SET_INSTA:
			return action.payload
		case CLEAR_INSTA:
			return ''
		default:
			return state
	}
}

function verify(state = true, action) {
	switch (action.type) {
		case SET_VERIFY:
			return true
		case CLEAR_VERIFY:
			return false
		default:
			return state
	}
}
