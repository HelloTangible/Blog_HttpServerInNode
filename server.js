const Http = require('http')
const HttpDispatcher = require('httpdispatcher')
const Winston = require('winston')

const dispatcher = new HttpDispatcher()
const port = process.env.port || 8080

const handleRequest = (request, response) => {
  Winston.info(`Route requested: ${request.url}`)
  dispatcher.dispatch(request, response)
}

const server = Http.createServer(handleRequest)
require('./routes')(dispatcher)

exports.listen = () => {
  server.listen(port, () => {
    Winston.info(`Http server listening on http://localhost:${port}`)
  })
}

exports.close = (next) => {
  server.close(next)
}

const shouldStart = process.argv.find((n) => n === '--start')
if (shouldStart) {
  exports.listen()
}
