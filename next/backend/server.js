const express = require('express')
const { parse } = require('url')
const next = require('next')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const config = require('./config')

const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || config.serverPort
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

mongoose.connect(`${config.mongoAddr}/blogs`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection

db.on('error', console.error.bind(console, '> An error occurred, unable to connect mongo:'))
db.once('open', function() {
  console.log('> Mongo says Hi~')
})

nextApp.prepare().then(() => {
  const server = express()
  server.use(express.static('public'))
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))

  // 允许跨域
  // server.all('*', function (_req, res, next) {
  //   res.header('Access-Control-Allow-Origin', '*')
  //   res.header('Access-Control-Allow-Methods', 'GET, POST')
  //   res.header('Access-Control-Allow-headers', 'Content-Type, X-Requested-With')
  //   next()
  // })

  // 注入接口路由
  routes(server)

  // 页面路由
  server.get('/', (req, res) => {
    handle(req, res)
  })

  server.get('/blog', (req, res) => {
    handle(req, res)
  })

  server.get('/blog/*', (req, res) => {
    const parseUrl = parse(req.url, true)
    const { pathname } = parseUrl
    nextApp.render(req, res, pathname)
  })

  server.get('/404', (req, res) => {
    handle(req, res)
  })

  server.all('*', (req, res) => {
    nextApp.render(req, res, '/404')
  })

  server.listen(port, 'localhost', err => {
    if (err) {
      throw err
    }

    console.log(`> Ready on http://localhost:${port}`)
  })
}).catch(err => {
  console.log('> An error occurred, unable to start the server')
  console.log(err)
})
