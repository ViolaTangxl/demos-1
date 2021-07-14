const express = require('express')

const router = express.Router()

const Blog = require('../models/blog')

router.get('/list', (_req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      const errCode = err.status || 500

      res.status(errCode).send({
        code: errCode,
        error: 'get blogs list failed!'
      })
    } else {
      res.status(200).json(blogs)
    }
  })
})

router.get('/:id', (req, res) => {
  Blog.findOne({ id: req.params.id }, (err, blog) => {
    if (err) {
      const errCode = err.status || 500

      res.status(errCode).send({
        code: errCode,
        error: 'get blog by id failed!'
      })
    } else if (!blog) {
      res.status(404).send({
        code: 404,
        error: 'not found!'
      })
    } else {
      res.status(200).json(blog)
    }
  })
})

module.exports = router
