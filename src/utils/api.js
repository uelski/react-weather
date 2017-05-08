import axios from 'axios';

var key = '4777a67ac7e3a7bc31afada79934612a';



module.exports = {
	getWeather: function(city) {
		return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&APPID=' + key)
		.then(function(res) {
			return res.data;
		});
	}
}