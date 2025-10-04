const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const path = require('path')
const fs = require('fs')

const dev = false
const hostname = '0.0.0.0' // Listen on all interfaces
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

console.log('🚀 Starting Actoviz Next.js Server...')
console.log(`📡 Server will run on port: ${port}`)
console.log(`🌐 Hostname: ${hostname}`)

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { pathname } = parsedUrl

      // Serve static files from dist/static
      if (pathname.startsWith('/_next/static/') || pathname.startsWith('/static/')) {
        const filePath = path.join(__dirname, 'dist', pathname)
        
        if (fs.existsSync(filePath)) {
          const ext = path.extname(filePath)
          const contentType = {
            '.js': 'application/javascript',
            '.css': 'text/css',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.woff': 'font/woff',
            '.woff2': 'font/woff2',
            '.ttf': 'font/ttf',
            '.eot': 'application/vnd.ms-fontobject'
          }[ext] || 'application/octet-stream'

          res.setHeader('Content-Type', contentType)
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
          
          const fileStream = fs.createReadStream(filePath)
          fileStream.pipe(res)
          return
        }
      }

      // Serve favicon and other root files
      if (pathname === '/favicon.ico' || pathname === '/robots.txt' || pathname === '/sitemap.xml') {
        const filePath = path.join(__dirname, 'public', pathname)
        
        if (fs.existsSync(filePath)) {
          const ext = path.extname(filePath)
          const contentType = {
            '.ico': 'image/x-icon',
            '.txt': 'text/plain',
            '.xml': 'application/xml'
          }[ext] || 'application/octet-stream'

          res.setHeader('Content-Type', contentType)
          res.setHeader('Cache-Control', 'public, max-age=31536000')
          
          const fileStream = fs.createReadStream(filePath)
          fileStream.pipe(res)
          return
        }
      }

      // Serve images from public directory
      if (pathname.startsWith('/images/')) {
        const filePath = path.join(__dirname, 'public', pathname)
        
        if (fs.existsSync(filePath)) {
          const ext = path.extname(filePath)
          const contentType = {
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml'
          }[ext] || 'application/octet-stream'

          res.setHeader('Content-Type', contentType)
          res.setHeader('Cache-Control', 'public, max-age=31536000')
          
          const fileStream = fs.createReadStream(filePath)
          fileStream.pipe(res)
          return
        }
      }

      // Handle Next.js routes - all dynamic routes
      console.log(`🌐 Handling request: ${req.method} ${req.url}`)
      
      // Set proper headers for all responses
      res.setHeader('X-Frame-Options', 'DENY')
      res.setHeader('X-Content-Type-Options', 'nosniff')
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
      
      // Let Next.js handle all routes dynamically
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
      console.log(`> Static files will be served from dist/ and public/ directories`)
    })
})
