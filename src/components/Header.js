import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Header extends Component {
	render () {
		return (
			<div className="header-container">
				<div className="row">
					<h1>{this.props.text}</h1>
				</div>
			</div>
		)
	}
}

Header.propTypes = {
	text: PropTypes.string.isRequired
}

module.exports = Header;