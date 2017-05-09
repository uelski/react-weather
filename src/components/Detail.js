import React, { Component } from 'react';

class Detail extends Component {
	render() {
		var props = this.props.location.state
		console.log(props);
		return (
			<div>Detail</div>
		)
	}
}

module.exports = Detail;