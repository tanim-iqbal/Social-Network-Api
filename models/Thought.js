const { Schema, model } = require('mongoose');
const reaction = require('./Reaction')

const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: formatTime,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [ reaction ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

function formatTime(time) {
  let created = new Date(time)
  let formatted = created.toLocaleString("en-US")
  return formatted
}

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  })

const Thought = model('thought', thoughtSchema);

module.exports = Thought