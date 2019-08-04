require('./config/config');
require('./models/db');


const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

//config router

const rtsIndex= require('./routes/index.router')

var app=express();
//middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', rtsIndex);

//error message
app.use((err, res , req, next)=>{
    if(err.name==='ValidationError'){
        var varErrors=[];
        Object.keys(err.errors).forEach(key=>varErrors.push(err.errors[key].message));
        res.status(422).send(varErrors)
    }
})

//start server

app.listen(process.env.PORT,()=>console.log(`Server running at port: ${process.env.PORT}`))
