const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('API RUNNING');
});

// set the port number
const PORT = process.env.PORT || 5000;

// listen to the port
app.listen(PORT, () =>
  console.log(`Server 
started on port ${PORT}`)
);
