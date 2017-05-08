import React, { Component } from 'react';

class Page extends Component {
	render () {
		return (
			<div className="page-container">
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
}

module.exports = Page;