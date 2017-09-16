const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  LastName: {
    type: String
  },
  BirthDate: {
    type: String
  },
  Country: {
    type: String
  },
  City: {
    type: String
  },
  Job: {
    type: String
  },
  GSM: {
    type: String
  },
  HomePhone: {
    type: String
  },
  ZipCode: {
    type: String
  },
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function (passw,hash, callback) {
  bcrypt.compare(passw, hash, function (err, isMatch) {
    if (err) {
      console.log(err);
      return callback(err);
    }
    callback(null, isMatch);
  });
}


//module.exports = mongoose.model('User', UserSchema);
