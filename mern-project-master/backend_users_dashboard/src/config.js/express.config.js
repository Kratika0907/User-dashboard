const express = require('express');
const helmet = require('helmet');


const routes = require('./routes');



const app = express();

// app.use(morgan(logs));




// app.use(cors());

// parse body and attach them to req.body
app.use(express.json());
app.use(express.urlencoded({extended : true}))

// secure apps 
app.use(helmet());
// this takes care of the origin when origin is undefined which is case of localhost
app.use((req,_,next)=> {
    req.headers.origin = req.headers.origin || req.headers.host;
})

app.use('/routes', routes);


module.exports = app;
