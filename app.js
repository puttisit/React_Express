//<!-- C:\Users\putti\OneDrive\Documents\GitHub\React_Express -->
const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');
const app = express();
const port = 5000;
const path = require('path')

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")))
app.get("/",(req,res) =>{

    res.send('hello Word ss!!');
   

})   //จัดการ reques ด้วยหน้า /

app.listen(port,()=>{

    //console.log("Listen on Port : "+ chalk.blue(port));
   debug("Listen on Port : "+ chalk.blue(port));
   

})

