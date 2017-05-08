import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';
import queryString from 'query-string';

function Day (props) {
	return (
		<div className="day-container">
			<div>{this.props.day}</div>
			<div>{this.props.temp}</div>
			<div>{this.props.description}</div>
		</div>
	)

}

Day.propTypes = {
	day: PropTypes.string.isRequired,
	temp: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}

class Forecast extends Component {
	constructor(props) {
		super(props);

		this.state = {
			days: [],
			city: ''
		}
	}
	componentDidMount () {
		var params = queryString.parse(this.props.location.search);
		api.getWeather(params.place).then(function(res) {
			console.log(res);
		})
	}
	render () {
		return (
			<div>Forecast</div>
		)
	}
}

module.exports = Forecast;