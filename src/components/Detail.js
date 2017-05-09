import React, { Component } from 'react';

class Detail extends Component {
	render() {
		var props = this.props.location.state
		
		return (
			<div className="detail-container">
				<h2 className="detail-date">{props.dt_formatted}</h2>
				<div>{props.temp.day}</div>
				<div>{props.weather[0].main}</div>
				<div>{props.weather[0].description}</div>
			</div>
		)
	}
}

module.exports = Detail;