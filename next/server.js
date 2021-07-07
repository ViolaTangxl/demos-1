const express = require('express')
const { parse } = require('url')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(express.static('static'))

  server.get('/', (req, res) => {
    handle(req, res)
  })

  server.get('/blog/', (req, res) => {
    const parseUrl = parse(req.url, true)
    const { pathname, query } = parseUrl
    const id = pathname.replace('/blog/', '')
    query.id = id
    app.render(req, res, '/blog', query)
  })

  server.get('/404', (req, res) => {
    handle(req, res)
  })

  server.all('*', (req, res) => {
    app.render(req, res, '/404')
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
