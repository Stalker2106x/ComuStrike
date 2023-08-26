const utils = require('../../utils')

// info_joueur -> getPlayer
module.exports = {
  schema: {
    body: {
      type: 'object',
      required: ['LENUM', 'LEPASS', 'LAMAC'],
      properties: {
        LENUM: { type: 'number' },
        LEPASS: { type: 'string' },
        LAMAC: { type: 'string' }
      }
    }
  },
  handler: async (app, req, res, next) => {
    const player = await app.db.models.Players.findOne({
      where: {
        player_id: req.body.LENUM,
        password: utils.passwordHash(req.body.LEPASS)
      }
    })
    if (player == null) {
      res.status(500).send({ error: 'Invalid credentials' })
    } else {
      const mp3s = await app.db.models.MP3.findAll()
      utils.logger('game', `Player [${player.player_id}] ${player.username} logged in`)
      res.status(200).send({
        NAME: player.username,
        ERROR: 0,
        MP3: mp3s[0].name,
        MP3__ID: mp3s[0].mp3_id,
        MODEL: player.model,
        IS_OP: player.role,
        VALIDE: player.active,
        MSG1: 'testmsg1',
        MSG2: 'testmsg2',
        MSG3: 'testmsg3',
        MSG4: 'testmsg4',
        SCORE: player.score,
        SCROLL: 'ComuStrike Unofficial Server - Enjoy RomuStrike in 2023... and more!',
        STATS: `Score: ${player.score}`,
        PANEL: `ComuStrike Unofficial Server v${app.config.serverVersion}`,
        ROMUCHAT: global.forceLocalhost ? '127.0.0.1' : app.config.publicIP,
        ID_PLAYER: player.player_id,
        CONTROLE: 'checksum'
      })
    }
    next()
  }
}
