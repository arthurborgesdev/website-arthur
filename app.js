require('dotenv').config()
const express = require('express'),
      app = express(),
      port = process.env.PORT,
      path = require('path')
      bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

rootPATH = { root: path.join(__dirname, 'public') }

app.get('/', (req, res) =>
	res.sendFile('index.html', rootPATH ))

app.get('/about', (req, res) =>
	res.sendFile('about.html', rootPATH ))

app.get('/teste', (req, res) =>
	res.sendFile('teste.html', rootPATH ))

app.get('/contact', (req, res) =>
	res.sendFile('contact.html', rootPATH ))

app.post('/contact', (req, res) => {
	console.log(req.body)
	res.redirect('/contact')
})
	

app.listen(port, () =>
	console.log(`Server started on port ${port}`));