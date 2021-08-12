// get object from basic packages...
const express = require('express');
require('dotenv').config({path:'./environmentVariable/passwordDb.env'});
const app = express();

require('./startup/middlewares')(app);

const port = process.env.PORT || 5000;
app.listen(port,() =>{
  console.log(`${port} - port is running...`);
});

