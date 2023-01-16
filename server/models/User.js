const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcrypt')


const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username required"],
    unique: [true, "Username already taken"]
  },
  email: { 
    type: String,
    required: [true, "Email required"], 
    unique: [true, "Email already in use"],
    match: [ /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Enter a valid email" ]
  },
  password: {
    type: String,
    required: [true, "Password required"],
    min: [5, "Password must be at least 5 characters"],
    set: value => bcrypt.hashSync(value, 10)
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true
  }
});

module.exports = User = model('User', userSchema);