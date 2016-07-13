var React = require('react');
var transparentBg = require('../styles/styles').transparentBg;
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function(){
		return {
			username: ''
		}
	},
	onUpdateUser: function(e){
		this.setState({
			username: e.target.value
		})
	},
	onSubmitUser: function(e){
		e.preventDefault();
		var username = this.state.username;
		this.setState({
			username: ''
		});
		if(this.props.routeParams.playerOne){
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: username
				}
			})
		}
		else{
			this.context.router.push('/playerTwo/' + username)
		}
	},
	render: function(){
		return (
			<Prompt 
				header={this.props.route.header}
				onSubmitUser={ this.onSubmitUser }
				onUpdateUser={ this.onUpdateUser }
				username={ this.state.username } />
		)
	}
});

module.exports = PromptContainer;