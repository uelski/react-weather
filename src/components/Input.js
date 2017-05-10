import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			place: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}
	handleChange (event) {
		var place = event.target.value;

		this.setState(function() {
			return {
				place: place
			}
		})
	}
	render (props) {
		var place = this.state.place;
		return (
			<form className={this.props.direction}>
				<input className="input" type='text' placeholder='Burlington, VT' 
				value={this.state.place}
				onChange={this.handleChange}/>
				<Link 
				to={{
					pathname: '/forecast',
					search: '?place=' + place
				}}>
					<button className="input-button" disabled={this.state.place === ''}>Get Weather</button>
				</Link>
			</form>
		)
	}
}

Input.defaultProps = {
	direction: 'horizontal'
}

Input.propTypes = {
	direction: PropTypes.string.isRequired
}

module.exports = Input;