var express = require('express');
var router = express.Router();

console.log("login")
/* GET login page. */
router.get('/login', function(req, res, next) {

    res.redirect('login.html');
});

module.exports = router;