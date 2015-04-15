express = require('express')
router = express.Router()

### GET users listing. ###

router.get '/', (req, res, next) ->
  res.render 'gram', title: 'ADPR grammar'
  return
module.exports = router
