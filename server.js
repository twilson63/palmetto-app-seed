require('dotenv').config()
const http = require('http')
const filed = require('filed')
const summary = require('server-summary')
const path = require('path')

const server = http.createServer(function (req, res) {
  if (req.url === '/bundle.js') {
    return filed(path.resolve('./bundle.js')).pipe(res)
  }
  filed(path.resolve('./index.html')).pipe(res)
})

server.listen(process.env.PORT || 3000, summary(server))

