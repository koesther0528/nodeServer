var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request, response){
    console.log(request.url);
    
    if(request.url ==='/'){
        response.writeHead(200);
        response.end(fs.readFileSync(__dirname + '\\index.html'));    
    }
    if(request.url==='/picture'){
        fs.readFile('./picture/picture.jpg', function(err, data){
            console.log('picture loading...');
            response.writeHead(200);
            response.write(data);
            response.end();
        });
    }
});
app.listen(8000);