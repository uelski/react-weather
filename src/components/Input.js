import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			place: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.submitPlace = this.submitPlace.bind(this);
	}
	handleChange (event) {
		var place = event.target.value;

		this.setState(function() {
			return {
				place: place
			}
		})
	}
	submitPlace (event) {
		event.preventDefault();
		console.log('submit');
		api.getWeather(this.state.place);
	}
	render () {
		return (
			<form onSubmit={this.submitPlace}>
				<input type='text' placeholder='Burlington, VT' 
				value={this.state.place}
				onChange={this.handleChange}/>
				<button>Get Weather</button>
			</form>
		)
	}
}

module.exports = Input;