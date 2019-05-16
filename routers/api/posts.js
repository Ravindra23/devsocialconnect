const express = require('express');
const router = express.Router();

// @route GET api/posts/test
// @desc Test Posts route
// @access Public
router.get('/test',(req,res)=>
    res.json({msg:"test post"})
)
 
// @route GET api/posts/test
// @desc Test User route
// @access Public

module.exports = router;