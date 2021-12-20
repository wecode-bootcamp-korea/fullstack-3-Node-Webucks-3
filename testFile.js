const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify({message : 'WELCOME'}))
})
server.listen(3000, ()=>{
    console.log('server is running on PORT 3000')
})