const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books.js')

router.get('/list', booksController.list)

router.get('/add', (req, res) => {
	res.render('add-book')
})

router.post('/add', booksController.add)

router.delete('/delete/:id', booksController.delete)

module.exports = router;
