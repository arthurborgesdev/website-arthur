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
	var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: {
	    personalizations: [
	      {
	        to: [
	          {
	            email: 'arthurborges.dev@gmail.com',
	          },
	        ],
	        subject: req.body.name,
	      },
	    ],
	    from: {
	      email: req.body.email,
	    },
	    content: [
	      {
	        type: 'text/plain',
	        value: req.body.message,
	      },
	    ],
	  },
	});

	sg.API(request, function(error, response) {
	  if (error) {
	    console.log('Error response received');
	  }
	  console.log(response.statusCode);
	  console.log(response.body);
	  console.log(response.headers);
	});

	res.redirect('/contact')
})

app.get('/blog', (req, res) =>
	res.sendFile('blog.html', rootPATH ))
	

app.listen(port, () =>
	console.log(`Server started on port ${port}`));