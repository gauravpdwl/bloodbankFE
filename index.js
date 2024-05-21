import express from 'express';
// const express=require('express');

const app=express();

app.use(express.static('dist'));

app.get('/', (req, res)=>{
    res.render('index.html');
})

app.listen(8001, (err)=>{
    if(err){
        console.log("Error in launching Application on port");
    }

    console.log("Application is Started");
})

