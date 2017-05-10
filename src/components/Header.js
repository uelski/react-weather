import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
	render () {
		return (
			<div className="header-container">
				<h1>{this.props.text}</h1>
				{this.props.children}
			</div>
		)
	}
}

Header.propTypes = {
	text: PropTypes.string.isRequired
}

module.exports = Header;