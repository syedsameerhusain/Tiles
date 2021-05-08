const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();
app.use(express.json({ extended: false }));
// app.get('/', (req, res, next) => {
//   res.send('API is Running');
// });
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profiles', require('./routes/api/profiles'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server port started on port no. ${PORT}`));
