const express = require('express');
const app = express();
const users = require('./users');
const courses = require('./courses');

app.use('/users',users);
app.use('/courses',courses);




app.listen(3001,()=>{
    console.log('Server running at 3000');
});