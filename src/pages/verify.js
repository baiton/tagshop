const React = require('react')
const { connect } = require('react-redux')

function Verify(props) {
	console.log(props)
	return (
		<div className="avenir">
			<div>
				<img
					className="flex center"
					src="http://tagshop.co/assets/media/brand250.png"
					alt="TagShop"
				/>
			</div>
			<div className="dt-ns dt--fixed-ns">
				<div className="dtc-ns tc pa4" />
				<div className="dtc-ns tc h7 pv4 bg-black-05 br3">
					<a
						className="no-underline near-white bg-animate bg-blue hover-bg-gray inline-flex items-center ma2 tc br2 pa2"
						href="https://instagram.com/"
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
				<div class="dtc-ns tc pv4" />
			</div>
		</div>
	)
}

const connector = connect()

export default connector(Verify)
