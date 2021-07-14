module.exports = function(server) {
  // blog 路由
  server.use('/api/blog', require('./blog'))
}
