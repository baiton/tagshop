const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router-dom')
const { SET_USER } = require('../constants')
const { getUser } = require('../db.js')
const { pathOr } = require('ramda')

class Verify extends React.Component {
	componentDidMount() {
		this.props.dispatch(getUser(this.props.match.params.username))
	}
	render() {
		const props = this.props
		const userName = props.match.params.username
		const verifyUrl = pathOr(null, ['user', 'user', 'loginUrl'], props)
		return (
			<div>
				{pathOr('', ['user', 'user', 'loginUrl'], props) && (
					<div className="oswald">
						<div className="flex justify-between">
							<section>
								<Link to={'/' + userName}>
									<button className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
										Back
									</button>
								</Link>
							</section>
							<img
								className="flex center"
								src="http://tagshop.co/assets/media/brand250.png"
								alt="TagShop"
							/>
							<section>
								<Link to="/">
									<button className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
										Home
									</button>
								</Link>
							</section>
						</div>
						<div className="dt-ns dt--fixed-ns">
							<div className="dtc-ns tc pa4" />
							<div className="dtc-ns tc h7 pv4 bg-black-05 br3">
								<a
									className="no-underline near-white bg-animate bg-blue hover-bg-gray inline-flex items-center ma2 tc br2 pa2"
									href={verifyUrl}
									target="_blank"
									title="Instagram"
								>
									<img
										src="http://library.austintexas.gov/sites/default/files/instagram-logo-white.png"
										alt=""
										className="dib h2 w2"
										fill="currentColor"
									/>
									<span className="f6 ml3 pr2">Authorize Your Instagram</span>
								</a>
								<div className="tc mb2">
									<p>
										By authorizing, you agree to our <a>Terms & Conditions</a>
									</p>
								</div>
							</div>
							<div className="dtc-ns tc pv4" />
						</div>
					</div>
				)}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

const connector = connect(mapStateToProps)

export default connector(Verify)
