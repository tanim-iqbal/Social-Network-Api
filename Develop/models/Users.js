const { Schema, model } = require('mongoose');

// Schema to create Student model
const usersSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /.+\@.+\..+/,
    },
    thoughts: [//require 
      {
      type: Schema.Types.ObjectID,
      ref: 'Thoughts',
    },
  ],
  friends: [//require 
    {
    type: Schema.Types.ObjectID,
    ref: 'Friends',
  },
],
    toJSON: {
      getters: true,
    },
  }
);

const User = model('User', usersSchema);

module.exports = Student;
