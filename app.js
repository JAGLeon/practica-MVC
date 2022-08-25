const express = require('express');
const app = express();
const path  = require('path');

app.use(express.static(path.join(__dirname,'./public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

const routerController = require('./routers/main');

app.use('/', routerController);


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});