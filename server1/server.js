const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello, world from server 1!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
