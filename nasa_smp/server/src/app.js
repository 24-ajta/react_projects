const express = require('express');

const api=require('./routes/api'); //require router exported from api.js
const app = express();


app.use(express.json());//json parsing


app.use('/v1',api);

app.get('/test',(req,res)=>{
    res.status(200).send({status:200,message:"Successful"})
});

module.exports = app;