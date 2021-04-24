const mongoose = require('mongoose');
//name,date,organisation,phone no.,rating
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  Organisation_name: {
    type: String,
    required: true,
  },
  Phone_no: {
    type: Number,
    required: true,
  },
  Rating: {
    type: Number,
    required: true,
  },
});
module.exports = Profile = mongoose.model('profile', ProfileSchema);
