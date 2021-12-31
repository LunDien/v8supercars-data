var appAPI = require('./appAPI')

function router(app) {
  app.use('/', appAPI)
}

module.exports = router;
