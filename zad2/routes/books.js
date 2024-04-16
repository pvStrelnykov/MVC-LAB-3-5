const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books.js')

router.get('/list', booksController.list)

module.exports = router;
