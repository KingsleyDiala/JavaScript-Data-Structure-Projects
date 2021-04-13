 // We want to create and extract information about a favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. I'll create data using the JavaScript data structures: arrays, objects, etc. For example, I want to get the total number of games a team has played, or the average score of all of their games.


//  creating a team object
const team = {
  _players: [
    {firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 23},
    {firstName: 'Kingsley',
    lastName: 'Diala',
    age: 22},
    {firstName: 'Ronaldo',
    lastName: 'Junior',
    age: 24},
  ],
  _games: [
    {
      opponent: 'Borncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Barca',
      teamPoints: 58,
      opponentPoints: 49
    },
    {
      opponent: 'Dresden',
      teamPoints: 39,
      opponentPoints: 48
    }
  ],
  get players() {
    return this.players
  },
  get games() {
    return this.games
  },
  //creating a methon to add a new player to the team.
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    return this._players.push(player)
  },
  addGame(opponent1, teamPoints1, opponentPoints1) {
    let game = {
      opponent: opponent1,
      teamPoints: teamPoints1,
      opponentPoints: opponentPoints1
    }
    return this._games.push(game)
  },
};

// team's players
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

// team's Games
team.addGame('Titans', 100, 98);
team.addGame('Wolves', 86, 53);
team.addGame('Titans', 98, 63);

console.log(team._games)
console.log(team._players)