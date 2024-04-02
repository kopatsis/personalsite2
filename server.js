const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('./'));

app.listen(port,'0.0.0.0', () => {
  console.log(`Server is running at http://localhost:${port}`);
});