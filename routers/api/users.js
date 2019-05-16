const express = require('express');
const router = express.Router();

// @route GET api/users/test
// @desc Test User route
// @access Public
router.get('/test',(req,res)=>
    res.json({msg:"test user"})
    // res.send("users test page")
)

module.exports = router;