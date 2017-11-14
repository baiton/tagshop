import history from '../history'
import '../css/userstore.css'
import Product_Card from '../components/_Product_Card.js'
import { MDCSnackbar } from '@material/snackbar'
const loading = require('../images/loading.svg')
const React = require('react')
const { Link } = require('react-router-dom')
const { connect } = require('react-redux')
const { getUser } = require('../db.js')
const { map, pathOr, assoc, compose, is } = require('ramda')
const { SET_VERIFY } = require('../constants')

class UserStore extends React.Component {
  //   componentDidMount() {
  //     this.props.dispatch(getUser(this.props.location.pathname.substring(1)))
  //   }
  //
  //   render() {
  //     const props = this.props
  //     return (
  //       <div>
  //         {pathOr(null, ['user', 'user', 'media'], props) &&
  //           !is(String, props.user.user.media) && (
  //             <div className="avenir">
  //               <div className="flex justify-between">
  //                 <Link to="/">
  //                   <button className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
  //                     Home
  //                   </button>
  //                 </Link>
  //                 <img
  //                   id="logo"
  //                   src="http://tagshop.co/assets/media/brand250.png"
  //                   alt="TagShop"
  //                 />
  //                 <Link to="/cart">
  //                   <button className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
  //                     Cart
  //                   </button>
  //                 </Link>
  //               </div>
  //               <div className="card-wrapper">
  //                 {compose(
  //                   map(Product_Card),
  //                   map(assoc('cart', this.props.cart)),
  //                   map(assoc('dispatch', this.props.dispatch)),
  //                   map(assoc('handleCart', this.props.handleCart))
  //                 )(pathOr([], ['user', 'user', 'media'], props))}
  //               </div>
  //             </div>
  //           )}
  //         {pathOr(null, ['user', 'user', 'loginUrl'], props) && (
  //           <div>
  //             <div className="flex fustify-around mp3 pv2">
  //               <div>
  //                 <Link to="/">
  //                   <button className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
  //                     Home
  //                   </button>
  //                 </Link>
  //               </div>
  //               <div className="center">
  //                 <img
  //                   id="logo"
  //                   src="http://tagshop.co/assets/media/brand250.png"
  //                   alt="TagShop"
  //                 />
  //               </div>
  //               <div>
  //                 <Link to="/cart">
  //                   <button className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
  //                     Cart
  //                   </button>
  //                 </Link>
  //               </div>
  //             </div>
  //             <h1 className="tc st-noTagsflex flex-column items-center">
  //               You have not tagged any posts yet.<br />Tag them with #Tagshop and
  //               $(amount)
  //             </h1>
  //           </div>
  //         )}
  //         {is(String, pathOr(null, ['user', 'user', 'media'], props)) && (
  //           <div>
  //             <div className="flex fustify-around mp3 pv2">
  //               <div>
  //                 <Link to="/">
  //                   <button className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
  //                     Home
  //                   </button>
  //                 </Link>
  //               </div>
  //               <div className="center">
  //                 <img
  //                   id="logo"
  //                   src="http://tagshop.co/assets/media/brand250.png"
  //                   alt="TagShop"
  //                 />
  //               </div>
  //               <div>
  //                 <Link to="/cart">
  //                   <button className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
  //                     Cart
  //                   </button>
  //                 </Link>
  //               </div>
  //             </div>
  //             <h1 className="tc st-noTagsflex flex-column items-center">
  //               You have not tagged any posts yet.<br />Tag them with #Tagshop and
  //               $(amount)
  //             </h1>
  //           </div>
  //         )}
  //         {!pathOr('', ['user', 'user', 'media'], props) &&
  //           !pathOr('', ['user', 'user', 'loginUrl'], props) && (
  //             <div id="custom-loader-container">
  //               <img id="custom-loader" src={loading} alt="loading" />
  //             </div>
  //           )}
  //       </div>
  //     )
  //   }
  // }
  //
  // function mapActionsToProps(dispatch) {
  //   const doDispatch = (type, field, value) => {
  //     dispatch({
  //       type: type + field,
  //       payload: value
  //     })
  //   }
  //   return {
  //     dispatch,
  //     handleUser: name => {
  //       return e => {
  //         doDispatch('SET_USER', null, name)
  //       }
  //     },
  //     handleCart: post => {
  //       dispatch({
  //         type: 'SET_CART',
  //         payload: post
  //       })
  //     },
  //     handleUserVerificationNo: e =>
  //       window.alert(
  //         'Please DM this artist and let them know to update their shipping information in order to purchase this product'
  //       ),
  //     handleUserVerificationYes: e => history.replace('/verify')
  //   }
  // }
  //
  // const mapStateToProps = state => {
  //   return {
  //     user: state.user,
  //     cart: state.cart
  //   }

  componentDidMount() {
    this.props.dispatch(getUser(this.props.match.params.username))
    this.props.dispatch({
      type: SET_VERIFY
    })
  }

  render() {
    const props = this.props
    const userName = props.match.params.username
    return (
      <div>
        {pathOr(null, ['user', 'user', 'media'], props) &&
          !is(String, props.user.user.media) && (
            <div className="avenir">
              <div className="flex justify-between">
                <Link to="/">
                  <button className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
                    Home
                  </button>
                </Link>
                <img
                  id="logo"
                  src="http://tagshop.co/assets/media/brand250.png"
                  alt="TagShop"
                />
                <Link to="/cart">
                  <button className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
                    Cart
                  </button>
                </Link>
              </div>
              <section className="wrapper" />
              <div className="card-wrapper">
                {compose(
                  map(Product_Card),
                  map(assoc('cart', this.props.cart)),
                  map(assoc('dispatch', this.props.dispatch)),
                  map(assoc('handleCart', this.props.handleCart))
                )(pathOr([], ['user', 'user', 'media'], props))}
              </div>
            </div>
          )}
        {pathOr(null, ['user', 'user', 'loginUrl'], props) && (
          <div>
            <div className="flex fustify-around mp3 pv2">
              <div>
                <Link to="/">
                  <button className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
                    Home
                  </button>
                </Link>
              </div>
              <div className="center">
                <img
                  id="logo"
                  src="http://tagshop.co/assets/media/brand250.png"
                  alt="TagShop"
                />
              </div>
              <div>
                <Link to="/cart">
                  <button className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
                    Cart
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <h4 className="oswald">Is this your account?</h4>
              <Link to={userName + '/verify'} className="dib v-mid">
                <button className="f6 link dim br-pill ph3 pv2 ma1 dib white bg-blue">
                  Yes
                </button>
              </Link>
              <div>
                <button
                  className="f6 link dim br-pill ph3 pv2 ma1 dib white bg-blue"
                  onClick={props.handleClickNo}
                >
                  No
                </button>
              </div>
            </div>
            <h2 className="tc st-noTagsflex flex-column items-center">
              You have not tagged any posts yet.<br />Tag them with #Tagshop and
              $(amount)
            </h2>
          </div>
        )}
        {is(String, pathOr(null, ['user', 'user', 'media'], props)) && (
          <div>
            <div className="flex fustify-around mp3 pv2">
              <div>
                <Link to="/">
                  <button className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
                    Home
                  </button>
                </Link>
              </div>
              <div className="center">
                <img
                  id="logo"
                  src="http://tagshop.co/assets/media/brand250.png"
                  alt="TagShop"
                />
              </div>
              <div>
                <Link to="/cart">
                  <button className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
                    Cart
                  </button>
                </Link>
              </div>
            </div>
            <h1 className="tc st-noTagsflex flex-column items-center">
              You have not tagged any posts yet.<br />Tag them with #Tagshop and
              $(amount)
            </h1>
          </div>
        )}
        {!pathOr('', ['user'], props.user) && (
          <div id="custom-loader-container">
            <img id="custom-loader" src={loading} alt="loading" />
          </div>
        )}
      </div>
    )
  }
}

function mapActionsToProps(dispatch) {
  const doDispatch = (type, field, value) => {
    dispatch({
      type: type + field,
      payload: value
    })
  }
  return {
    dispatch,
    handleUser: name => {
      return e => {
        doDispatch('SET_USER', null, name)
      }
    },
    handleCart: post => {
      dispatch({
        type: 'SET_CART',
        payload: post
      })
    },
    handleClickNo: e => {
      window.alert(
        'Please Direct Message this seller to verify their account in order to purchase from them.'
      )
    }
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    user: state.user,
    cart: state.cart,
    verify: state.verify
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(UserStore)
