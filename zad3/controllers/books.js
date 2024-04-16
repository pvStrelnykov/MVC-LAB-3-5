const books = []

exports.list = (req, res) => {
	res.render('books', { books })
}

exports.add = (req, res) => {
	const { title, publishingYear, authorId } = req.body
	const id = books.length + 1

	const newBook = { id, title, publishingYear, authorId }
	books.push(newBook)

	res.redirect('/book/list')
}

exports.delete = (req, res) => {
	const { id } = req.params
	books = books.filter(book => book.id !== parseInt(id))
	res.redirect('/book/list')
}
