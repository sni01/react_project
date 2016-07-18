var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
	getInitialState: function(){
		return {
			scores: [],
			isLoading: true
		}
	},
	componentDidMount: function(){
		githubHelpers.battle(this.state.playersInfo)
	      .then(function (scores) {
	        this.setState({
	        	scores: scores,
	        	isLoading: false
	        })
	      }.bind(this))
	},
	render: function(){
		return (
			<Results 
				playersInfo={ this.state.playersInfo }
				scores={ this.state.scores }
				isLoading={ this.state.isLoading }/>
		)
	}
});

module.exports = ResultsContainer;