module.exports = {
  downloadAsset: require('./legacy/downloadAsset'),
  // Web
  home: require('./web/home'),
  register: require('./web/register'),
  // Assets
  getMapList: require('./v1/assets/getMapList'),
  getMP3List: require('./v1/assets/getMP3List'),
  // Object
  getObject: require('./v1/object/getObject'),
  placeObject: require('./v1/object/placeObject'),
  // Player
  setMP3: require('./v1/player/setMP3'),
  createPlayer: require('./v1/player/createPlayer'),
  getRank: require('./v1/player/getRank'),
  killed: require('./v1/player/killed'),
  getPlayer: require('./v1/player/getPlayer'),
  getPlayerId: require('./v1/player/getPlayerId'),
  // Server
  createServer: require('./v1/server/createServer'),
  deleteServer: require('./v1/server/deleteServer'),
  getServerList: require('./v1/server/getServerList'),
  joinServer: require('./v1/server/joinServer'),
  quitServer: require('./v1/server/quitServer'),
  // Session
  createSession: require('./v1/session/createSession'),
  // Tournament
  createTournament: require('./v1/tournament/createTournament'),
  getTournament: require('./v1/tournament/getTournament'),
  getTournamentList: require('./v1/tournament/getTournamentList')
}
