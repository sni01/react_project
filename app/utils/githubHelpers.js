var axios = require('axios');

var id = "sni01";
var secret = "65023c852abd0f0692e8f002fa91e52c0f2e88cb";
var params = "?client_id=" + id + "&client_secret=" + secret;

function getUserInfo(username){
	return axios.get('https://api.github.com/users/' + username + params);
}

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars (repos) {
  return repos.data.reduce(function (prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData (player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores (players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

var githubHelpers = {
	getPlayersInfo: function(players){
		return axios.all(players.map(function(username){
			return getUserInfo(username)
		})).then(function(info){
			return info.map(function(user){
				return user.data;
			})
		}).catch(function(err){

		})
	},
	battle: function (players) {
		console.log(players);
	    var playerOneData = getPlayersData(players[0]);
	    var playerTwoData = getPlayersData(players[1]);
	    return axios.all([playerOneData, playerTwoData])
	      .then(calculateScores)
	      .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
	}
};

module.exports = githubHelpers;