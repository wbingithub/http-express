var express = require('express');
var router = express.Router();

console.log("index")
/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect(200,'index.html');
});

module.exports = router;