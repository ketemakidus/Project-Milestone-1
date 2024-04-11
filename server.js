// Import required modules
const express = require('express');
const http = require('http');
const path = require('path');
const nodemailer = require('nodemailer');

// Express app
const app = express();
const port = 3000;

// HTTP server
const server = http.createServer(app);

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
app.post('/submitForm', async function (req, res) {
    try {
        const { name, email, message } = req.body;

        // Process form data and send email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ketemakidus009@gmail.com', 
                pass: 'lmua qtnq jyuz iyvm'
            }
        });

        // Compose email message
        const mailOptions = {
            from: email,
            to: 'ketemakidus009@gmail.com', 
            subject: 'New Message from Portfolio Contact Form',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent:', info.response);
        
        // Send success response
        res.status(200).send('Message sent successfully');
    } catch (error) {
        console.error('Error occurred:', error);
        // Send error response
        res.status(500).send('Error sending message');
    }
});
// Start the server
server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
