import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';
import queryString from 'query-string';

function Day (props) {
	return (
		<div onClick={props.onClick} className="day-container">
			<div>{props.date}</div>
			<div>{props.temp}</div>
			<div>{props.description}</div>
		</div>
	)

}

Day.propTypes = {
	date: PropTypes.string.isRequired,
	temp: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
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
		this.handleClick = this.handleClick.bind(this);
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
	componentWillReceiveProps(nextProps) {
		var params = queryString.parse(nextProps.location.search);
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
	handleClick (day) {
		day.city = this.state.city;
		this.props.history.push({
	      pathname: '/detail/' + this.state.city,
	      state: day
	    })
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
			<div className="forecast-container">
				<h1 className='city-name'>{this.state.city}</h1>
				{days.map(function(day) {
					var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
					var fDate = new Date(day.dt * 1000);
					var forecastDay = fDate.getDate();
					var year = fDate.getFullYear();
					var month = months[fDate.getMonth()];
					var formatted = month + ', ' + forecastDay + ' ' + year;
					day.dt_formatted = formatted;
					return(
						<Day key={day.dt}
						onClick={this.handleClick.bind(this, day)}
						temp={day.temp.day}
						date={day.dt_formatted}
						description={day.weather[0].main}/>
					)
				}.bind(this))}
			</div>
		)

	}
}

export default Forecast;
