/*Response*/

var http = require('http')
http.createServer((req,res)=>{
    res.write("hello would!")
    res.end()
}).listen(5500)

/*Request*/

var http = require('http')
http.createServer((req,res)=>{
    res.write(req.url)
    res.end()


}).listen(8080)