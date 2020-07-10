
const http = require('http')

const server = http.createServer((request, response) => {
    console.log('nos mandaron a llamar :D')
    response.writeHead(200, 'ok', {
        'Content-Type': 'text/html'
    })

    console.log('met', request.method)
    if (request.url === '/adios') {
        response.write('<h1> ADIOS</h1>')
    } else if (request.method === 'GET') {
        response.write('<h1>Aqui se uso GET</h1>')


    } else if (request.method === 'POST') {
        response.write('<h2>POST</h2>')
    } else {
        response.write('<h1>Hola desde node</h1>')
    }
    response.end()

})

server.listen('8080', () => {
    console.log('El servidor esta escuchando')
})