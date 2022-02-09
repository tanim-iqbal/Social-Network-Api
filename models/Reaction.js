const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now().toString(),
        get: formatTime,
    }
  },
  {
    toJSON: {
      getters: true,
    }
  }
);

function formatTime(time) {
  let created = new Date(time)
  let formatted = created.toLocaleString("en-US")
  return formatted
}

module.exports = reactionSchema