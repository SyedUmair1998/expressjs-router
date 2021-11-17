const express = require('express');
const router = express.Router();





router.get('/english',(req,res)=>{
    res.send('Courses english')
});
router.get('/maths',(req,res)=>{
    res.send('Courses maths')
});
router.get('/science',(req,res)=>{
    res.send('Courses science')
});

module.exports = router;