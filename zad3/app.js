const express = require('express')
const path = require('path')

const PORT = 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'zad3/views');

app.use('/', require('./routes/home'));
app.use('/book', require('./routes/books'));
app.use('/author', require('./routes/authors'));

app.use((req, res) => {
	res.status(404).send('404 Not Found');
})

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})