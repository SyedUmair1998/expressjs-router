const express = require('express');

const app = express();


app.listen(3001,()=>{
    console.log('Server running');
});
app.get('/', (req,res)=>{
    res.send('Hello from root');
});

app.get('/aboutus', (req,res)=>{
    res.send('Hello from about us');
});

app.get('/profile/users/user1', (req,res)=>{
    res.send('Hello from user1 route');
});

app.get('/profile/users/:name', (req,res)=>{
    res.send('Hello from route with name '+req.params.name);
});
app.get('/random.text', function (req, res) {
    res.send('random.text')
  })
  
  app.get('/ab?cd', function (req, res) {
    res.send('ab?cd route working');   
  })

  
  app.get('/ab+cd', function (req, res) {
    res.send('ab+cd route working');   
  })
  
  app.get('/ab*cd', function (req, res) {
    res.send('ab*cd route working');   
  })

  app.get(/r/, function (req, res) {
    res.send('/r/ route working')
  })

  app.get(/.*ship$/, function (req, res) {
    res.send('/.*ship$/')
  })


app.get('*', (req,res)=>{
    res.send('Hello from undefined route');
});

