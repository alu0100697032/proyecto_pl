express = require('express')
router = express.Router()

### GET home page. ###

router.get '/', (req, res, next) ->
  res.render 'test', title: 'ADPR test'
  return
module.exports = router
