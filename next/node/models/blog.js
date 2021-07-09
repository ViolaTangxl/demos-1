const mongoose = require('mongoose')

const schema = mongoose.Schema

const blogModel = new schema({
  id: { type: String },
  content: { type: String }
})

module.exports = mongoose.model('blogs', blogModel)
