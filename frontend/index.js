//kalo di package.json belum ditambah ["type": "module"], ternyata di json ga boleh komen hehe
//const http = require("http");
//const fs = require("fs");
import http from 'http';
import fs from 'fs';
import axios from 'axios';


http.createServer(async function(req, res){
    const url = req.url;

    if (url === '/auth/login'){
        const a = await axios({
            method: "GET",
            url: "http://localhost:1234/login"
        });

        console.log(a);

        fs.readFile('./login.html', null, (error, data) => {
            res.write(data);
            res.end();
        });
    } else {
        fs.readFile('./index.html', null, (error, data) => {
            res.write(data);
            res.end();
        });
    }
}).listen(2345);