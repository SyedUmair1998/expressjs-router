const express = require('express');
const router = express.Router();



router.get('/profile',(req,res)=>{
    res.send('User Profile')
});
router.get('/enrollments',(req,res)=>{
    res.send('User Enrollment')
});
router.get('/scores',(req,res)=>{
    res.send('User Scores')
});

module.exports = router;