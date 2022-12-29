const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/userDB');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};
