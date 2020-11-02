const express = require('express');
const app = express();
const port = 8004;
const cookieParser = require('cookie-parser');

const db = require('./config/mongoose');
//require all for session cookie
const session = require('express-session');



app.use(express.urlencoded());
app.use(cookieParser());




//to express router
app.use('/' , require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error : ${err}`);
    }
    console.log(`Server is Running on : ${port}`);
});