const express = require('express');
const path = require('path');
const routedMembers = require('./routes/api/members');


const logger = require('./middleware/logger');

//init express
const app = express();



//init the middleware
//app.use(logger);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

const PORT = process.env.PORT || 4000;

//member API routes
app.use('/api/members',routedMembers )

// app.get('/', (req,res) =>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// });

//set public folder
app.use(express.static(path.join(__dirname,'public')))



app.listen(PORT);