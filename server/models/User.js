const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcrypt')


const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username required"],
    unique: [true, "Username already taken"],
    minlength: [3, "Username must be at least 3 characters"]
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
    validate: {
      validator: function(value) {
        return value.length >= 8;
      },
      message: 'Password must be at least 8 characters long.'
    },
    // set: value => bcrypt.hashSync(value, 10)
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true
  }
});

// Check password validity before hasing it
userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;
    next();
  });
});

module.exports = User = model('User', userSchema);