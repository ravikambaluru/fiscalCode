const express=require('express');
const server=require('express')();
const config=require('config');
const cors=require('cors');
const helmet=require('helmet');
const controller=require('../controllers/controller');
const validate=require('../middleware/validation');

module.exports={express,server,config,cors,helmet,controller,validate};
