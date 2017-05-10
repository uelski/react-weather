import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
	render () {
		return (
			<div className="header-container">
				<Link className="header-link"
					to={{pathname: '/'}}>
					<h1>{this.props.text}</h1>
				</Link>	
				{this.props.children}
			</div>
		)
	}
}

Header.propTypes = {
	text: PropTypes.string.isRequired
}

module.exports = Header;