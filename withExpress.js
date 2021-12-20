const http = require('http')
const express = require('express')
const { sendPosts } = require('./sendPosts')

const app = express()

app.get('/',(req,res)=>{
    res.json({message : '/endpoint'})
})

app.post('/signup',handleSignUp);
app.post('/login',handleLogIn);
app.get('/products',sendPosts);

const server = http.createServer(app);

server.listen(3000, ()=>{
    console.log('server is listening on PORT 3000')
})