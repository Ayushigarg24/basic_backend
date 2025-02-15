require('dotenv').config();
const { configDotenv } = require('dotenv')
const express = require('express')
const app = express()
const port = 3000
 app.get('/',(req,res)=>{
    res.send('<h1>Hello World !</h1>');
 })
 app.get('/login',(req,res)=>{
    res.send('<h1>Hello World Login!</h1>');
 })
 app.get('/web',(req,res)=>{
    res.send('<h1>Hello World ! Web</h1>');
 })
 app.get('/user',(req,res)=>{
    res.send('<h1>Hello World !user</h1>');
 })
 app.listen(process.env.PORT,()=>{
      console.log(`listening on port ${port}`)
 })