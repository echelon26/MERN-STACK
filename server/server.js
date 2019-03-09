const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');
const app = express();
const port=process.env.PORT||5000;

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    next();
});
let MongoURI = 'mongodb://jitendra:jitendra123@ds247569.mlab.com:47569/jitendb';
let options = {
    keepAlive: 30000,
    useNewUrlParser: true
}
mongoose.Promise = global.Promise;
mongoose.connect(MongoURI,options).then(() => {
    console.log('Ola!! Database connect Successfully');
}).catch((error) => {
    console.log("Oops!!! Can't connect right Now!!!" );
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',routes);

app.listen(port,() => {
    console.log(`Server Running on port: ${port}`);
});