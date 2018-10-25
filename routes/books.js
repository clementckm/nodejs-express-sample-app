var express = require('express')
var router = express.Router()
var bookController = require('../controllers/books')

const get = {
	'method': 'GET',
};

const data = {
	'method': 'POST',
	'body': {
		_id: 1,
		author: 'testing author',
		name: 'book name',
		price: 12,
	},
};

// middleware specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
// post get delete request how to identify and work, how to call
router.post('/post', function (req, res) {
	bookController.bookPost(req, res);
	res.sendStatus(200);
})

router.get('/get', function (req, res) {
	console.log('get')
	bookController.bookGet(get, res);
})

router.delete('/delete', function (req, res) {
	bookController.bookDelete(req, res);
	res.send('Deleted')
})
//
// // define the about route
// router.get('/get/:id', function (req, res) {
//   res.send(req.params.id)
// })

module.exports = router
