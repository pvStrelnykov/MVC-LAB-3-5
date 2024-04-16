exports.list = (req, res) => {
	const authors = []
	res.render('authors', { authors })
}
