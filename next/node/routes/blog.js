const express = require('express')

const router = express.Router()

const Blog = require('../models/blog')

router.get('/list', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      res.status(err.status || 500).send({ error: 'get blogs list failed!' })
    } else {
      res.status(200).json(blogs)
    }
  })
})

router.get('/:id', (req, res) => {
  Blog.findOne({ id: req.params.id }, (err, blog) => {
    if (err) {
      res.status(err.status || 500).send({ error: 'get blog by id failed!' })
    } else if (!blog) {
      res.status(404).send({ error: 'not found!' })
    } else {
      res.status(200).json(blog)
    }
  })
})

module.exports = router
