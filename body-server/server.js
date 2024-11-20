    const http = require('http');
    
    const requestListener = (request, response) => {
        response.setHeader('Content-Type', 'text/html');
        response.statusCode = 200;
    
        const { method } = request;
    
        if(method === 'POST') {
            let body = '';
            request.on('data', (chunk) => {
                body += chunk;
            });
            request.on('end', () => {
                const parsedBody = JSON.parse(body);
                response.end(`Hai, ${parsedBody.name}!`);
            });
        }
    }
    const server = http.createServer(requestListener);
    
    const port = 5000;
    const host = 'localhost';
    
    server.listen(port, host, () => {
        console.log(`Server berjalan pada http://${host}:${port}`);
    });