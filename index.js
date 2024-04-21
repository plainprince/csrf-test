const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

// Set up CSRF protection
const csrfProtection = csrf({ cookie: true }); //not being used, because it is meant to be unsafe in this example

// Routes

// This route is supposed to update user's email
app.post('/update-email', (req, res) => {
    // In this example, we're assuming we're updating the email without any validation
    // Since CSRF protection is disabled, there's no need to validate CSRF token
    res.send('Email updated successfully');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
