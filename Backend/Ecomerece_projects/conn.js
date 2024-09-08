const express=require('express');
 const mongoose=require('mongoose');
  const connections=mongoose.connect('mongodb://127.0.0.1:27017/Ecomerece', {
 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 30000,
  }).then((connect)=>{
     console.log('connected with db');
  }).catch((err)=>{
     console.log(err+"error accured");
  });
  module.exports=connections;


  