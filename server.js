const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect the database
connectDB();

app.get('/', (req, res) => {
  res.send('API RUNNING');
});

// Init Middleware
app.use(express.json({ extended: false }));

// define route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// set the port numb
const PORT = process.env.PORT || 5000;

// listen to the port
app.listen(PORT, () =>
  console.log(`Server 
started on port ${PORT}`)
);
