const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

let users = []; // This will store users temporarily

// Signup endpoint
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  if (users.find(user => user.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Store user
  users.push({ username, email, password });
  res.status(200).json({ message: 'Signup successful' });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = users.find(user => user.email === email && user.password === password);

  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
