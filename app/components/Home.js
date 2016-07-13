var React = require('react');
var Link = require('react-router').Link;
var transparentBg = require('../styles/styles').transparentBg;

var Home = React.createClass({
	render : function(){
		return (
			<div className='jumbotron col-sm-12 text-center' style={ transparentBg } >
				<h1>Github Battle</h1>
				<p className='lead'>Text text</p>
				<Link to='/playerOne'>
					<button className='btn btn-lg btn-success'>Get Start</button>
				</Link>
			</div>
		)
	}
});

module.exports = Home;