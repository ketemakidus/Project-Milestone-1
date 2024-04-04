// Import required modules
const express = require('express');
const http = require('http');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Express app
const app = express();
const port = 3000;

// HTTP server
const server = http.Server(app);

// Set up middleware
app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '')));

// send HTML file on GET request
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html'); 
});

// Route to handle form submissions
app.post('/contact.html', function ( req, response) {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;


    // Process form data send email)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ketemakidus009@gmail.com', 
            pass: 'omgsjrbjamwwwbks'
        }
    });

    // Compose email message
    const mailOptions = {
        from: email,
        email: 'ketemakidus009@gmail.com', 
        subject: 'New Message from Portfolio Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

// Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred:', error);
           return res.status(500).send('Error sending message');
        } else {
            console.log('Message sent:', info.response);
            res.status(200).send('Message sent successfully');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
