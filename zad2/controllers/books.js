exports.list = (req, res) => {
	const books = []
	res.render('books', { books })
}
