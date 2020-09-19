const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();


mongoose.connect(config.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


const router = require('../router');

app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use('/', router)

app.get('/', function(req, res){
    res.render('../views/home-details');
})


//MIDDLEWARE

// app.use(bodyParser.json());

const port = process.env.PORT || 50001 ;
app.listen(port, () => {
    console.log('server is running', port);
})
