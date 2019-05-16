const express = require('express');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
// DB config
const db = require('./config/keys').mongoURI;

// get routes
const users = require('./routers/api/users');
const profile = require('./routers/api/profile');
const posts = require('./routers/api/posts');

// Initialize app
const app = express();

// DB Connection
mongoose.connect(db,{ useNewUrlParser: true })
    .then(() => console.log("database connected"))
    .catch(err => console.log(err));

// Use Routers
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts); 

app.get('/',(req,res)=>{
    res.send("Hello")
})
app.listen(port);
console.log(`app running on port ${port}`);