const express = require('express');
const http = require ('http');
const path = require ('path');
const nodemailer = require('nodemailer');

const app = express();
const server = http.Server(app);
const port = 3000;
const bodyParser = require('body-parser');

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

// Routing

app.post('/contact.html', (req, res) => {
    // Form submission handling code
});


// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, etc.) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

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
    console.log(`Server is running on port ${port}`);
});
