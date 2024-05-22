import express from 'express';
import path from 'path';

// const express=require('express');

const app=express();

app.use(express.static('dist'));

app.get('/projects/bloodbank', (req, res)=>{

    res.sendFile(path.join(path.__dirname, 'dist', 'index.html'));
})

app.get('/projects/bloodbank/adddonor,',(req, res)=>{

    res.sendFile(path.join(path.__dirname, 'dist', 'index.html'));
})

app.listen(8001, (err)=>{
    if(err){
        console.log("Error in launching Application on port");
    }

    console.log("Application is Started");
})

