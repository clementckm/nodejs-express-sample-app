const express = require('express')
var http = require('http')
var index = require('./routes')
var bodyParser = require('body-parser');
var router = express.Router()
const app = express()

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.use('/', index)

var server = http.createServer(app)
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})
