import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';
import queryString from 'query-string';

function Day (props) {
	return (
		<div className="day-container">
			<div>{props.date}</div>
			<div>{props.temp}</div>
			<div>{props.description}</div>
		</div>
	)

}

Day.propTypes = {
	date: PropTypes.string.isRequired,
	temp: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired
}

Day.defaultProps = {
	date: '',
	temp: 0,
	description: ''
}

class Forecast extends Component {
	constructor(props) {
		super(props);

		this.state = {
			days: [],
			city: '',
			error: null,
			loading: true
		}
	}
	componentDidMount () {
		var params = queryString.parse(this.props.location.search);
		api.getWeather(params.place).then(function(res) {

			if(res === null) {
				return this.setState(function() {
					return {
						error: 'There was an Error',
						loading: false
					}
				});
				
			}
			return this.setState(function() {
				return {
					error: null,
					loading: false,
					city: res.city.name,
					days: res.list
				}
			});
		}.bind(this))
	}
	render () {
		var days = this.state.days;
		
		if (this.state.loading === true) {
			return (
				<div>Loading...</div>
			)
		} else if (this.state.error) {
			return (
				<div>{this.state.error}</div>
			)
		}

		return (
			<div>
				<h1 className='city-name'>{this.state.city}</h1>
				{days.map(function(day) {
					
					return(
						<Day key={day.dt} 
						temp={day.main.temp}
						date={day.dt_txt}
						description={day.weather[0].main}/>
					)
				})}
			</div>
		)
		
	}
}

module.exports = Forecast;