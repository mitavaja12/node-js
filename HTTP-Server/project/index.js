const http = require('http');

const fs = require('fs');


const server = http.createServer((req, res) => {

    if (req.url == '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {

                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(err.message);

            }
            else {

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);

            }

        });


    }
    else if (req.url == '/login') {
        res.end('<h1>Login Page</h1>');
    }
    

    else if (req.url == '/signup') {
        res.end('<h1>Signup Page</h1>');
    }

    else if (req.url == '/contact') {
        res.end('<h1>Contact Page</h1>');
    }

    else if (req.url == '/service') {
        res.end('<h1>Service Page</h1>');
    }

    else {
        res.end('404 Not Found');
    }
});

server.listen(8090, () => {
    console.log(`Server Running On port 8090`);
});