var express = require('express')
var router = express.Router()

router.use('/books', require('./books'))
router.use('/error', require('./error'))

// define the home page route
router.get('/', function (req, res) {
  res.send('grand home page')
})

module.exports = router
