const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookingRoutes = require('./routes/bookingRoutes');
const authenticate = require('./middleware/authMiddleware'); 

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());  

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error: ', err));

app.use('/api/bookings', authenticate, bookingRoutes); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
