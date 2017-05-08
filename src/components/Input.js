import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			place: ''
		}
	}
	render () {
		return (
			<form>
				<input placeholder='Burlington, VT' />
				<button>Get Weather</button>
			</form>
		)
	}
}

module.exports = Input;