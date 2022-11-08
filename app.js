//<!-- C:\Users\putti\OneDrive\Documents\GitHub\React_Express -->
const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/",(req,res) =>{

    res.send('hello Word noom');
   

})   //จัดการ reques ด้วยหน้า /

app.listen(port,()=>{

    //console.log("Listen on Port : "+ chalk.blue(port));
   debug("Listen on Port : "+ chalk.blue(port));
   

})

