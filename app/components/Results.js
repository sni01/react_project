var React = require('react');

function puke(obj){
	return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
}

function Results(props){
	return props.isLoading === true ?
			<div>Loading...</div> :
			<div>Results: {puke(props)}</div>
}

Results.propTypes = {
	playersInfo: React.PropTypes.array.isRequired,
	scores: React.PropTypes.array.isRequired,
	isLoading: React.PropTypes.bool.isRequired
}

module.exports = Results;