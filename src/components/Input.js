import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
	render () {
		var place = this.state.place;
		return (
			<form>
				<input type='text' placeholder='Burlington, VT' 
				value={this.state.place}
				onChange={this.handleChange}/>
				<Link 
				to={{
					pathname: '/forecast',
					search: '?place=' + place
				}}>
					<button disabled={this.state.place === ''}>Get Weather</button>
				</Link>
			</form>
		)
	}
}

module.exports = Input;