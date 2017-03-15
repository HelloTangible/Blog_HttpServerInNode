const Winston = require('winston')

module.exports = (dispatcher) => {
  Winston.info('routes registered')

  dispatcher.setStatic('/resources')
  dispatcher.setStaticDirname('static')

  // html pages
  dispatcher.onGet('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<h1>Index Page</h1>')
  })

  // apis
  dispatcher.onGet('/api/customer', (req, res) => {
    const customer = {
      firstName: 'Tony',
      lastName: 'Stark'
    }

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(customer))
  })

  dispatcher.onPost('/api/customer', (req, res) => {
    Winston.info(req.body)

    const response = {
      status: 'success'
    }

    res.writeHead(201, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(response))
  })

  dispatcher.onError = (req, res) => {
    res.writeHead(404)
    res.end('<h1>Resource not found</h1>')
  }
}
