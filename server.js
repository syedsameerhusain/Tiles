const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
app.get('/', (req, res, next) => {
  res.send('API is Running');
});
app.listen(PORT, () => console.log(`Server port started on port no. ${PORT}`));
