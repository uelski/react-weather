import React, { Component } from 'react';

class Detail extends Component {
	constructor (props) {
		super(props);

		this.routeBack = this.routeBack.bind(this);
	}
	routeBack(city) {
		this.props.history.push({
	      pathname: '/forecast',
	      search: '?place=' + city
	    })
	}
	render() {
		var props = this.props.location.state
		return (
			<div className="detail-container">
				<h1 onClick={this.routeBack.bind(this, props.city)}>{props.city}</h1>
				<h3 className="detail-date">{props.dt_formatted}</h3>
				<div>{props.temp.day}</div>
				<div>{props.weather[0].main}</div>
				<div>{props.weather[0].description}</div>
			</div>
		)
	}
}

module.exports = Detail;