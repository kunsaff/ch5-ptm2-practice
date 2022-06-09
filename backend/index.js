import http from 'http';

http.createServer(function(req, res){
    const url = req.url;

    if(url === "/login") {
        res.write(JSON.stringify({
            username: "Adit",
            umur: "13 Tahun"
        }, null, 2))
    } else {
        res.writeHead(404);
    }
    res.end()
}).listen(1234);