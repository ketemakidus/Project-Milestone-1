const express = require('express');
const app = express();
const port = 3000;
const http = require ('http');
const path = require ('path');
const nodemailer = require('nodemailer');
const server = http.Server(app);
const bodyParser = require('body-parser');

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '')));

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// send HTML file on GET request
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
});

// Route to handle form submissions
app.post('/contact.html', (req, res) => {
    const { name, email, message } = req.body;

    // Process form data send email)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ketemakidus009@gmail.com', 
            pass: 'ruza tmof jzmk sbzt' 
        }
    });

    const mailOptions = {
        from: 'ketemakidus009@gmail.com',
        to: 'ketemakidus009@gmail.com', 
        subject: 'New Message from Portfolio Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred:', error);
            res.status(500).send('Error sending message');
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
