const mongoose = require('mongoose')

const schema = mongoose.Schema

const blogModel = new schema({
  id: { type: String },
  title: { type: String },
  description: { type: String },
  keywords: { type: String },
  content: { type: String }
})

module.exports = mongoose.model('blogs', blogModel)
