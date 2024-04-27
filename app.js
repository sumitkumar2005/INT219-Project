const express = require('express');
const bodyParser = require('body-parser');

const Student = require('./connect'); // Import Student model from connect.js

const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
    res.sendFile(__dirname + 'public/index.html');
});

app.get('/login.html', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});
app.post('/register', async (req, res) => {
   
    const email=req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;

        // Check if email, password, and phone are provided
       
        // Check if the user already exists
        const existingUser = await Student.findOne({ email });
        if(existingUser)
        {
            res.send(` <h2>User registered successfully!</h2>
            <p>Click <a href="/index.html">here</a> to login or
             click <a href="/login.html">here</a> for register another user.</p>`)
            
          
        }

     else{

        // If user doesn't exist and email/password are provided, proceed with registration
        const student = new Student({ email, password, phone });
        await student.save(); // Wait for the save operation to complete
 
        res.sendFile(__dirname+'./index.html')
     }
   
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user in database
        const user = await Student.findOne({ fname: email, password: password });

        // Check if user exists and password matches
        if (user) {
            res.redirect('/index.html');
        } else {
            res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Start server

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
