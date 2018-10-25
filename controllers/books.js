var express = require('express')
var path = require('path');
var router = express.Router()
// var index = require('../views/index.html')

const books = [];

function bookPost(req, res) {
	const result = books.push(req.body);
	return result;
};


function bookGet(req, res) {
	console.log(books)
	res.render('index', { data: books });
};

function bookDelete(req, res) {
	books.splice(0, books.length)
};

module.exports = {
	books,
	bookPost,
	bookGet,
	bookDelete,
}
