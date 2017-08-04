var express = require('express');
var router = express.Router();

/* GET register page. */
router.get('/register', function(req, res, next) {
    res.redirect('index.html');
});

module.exports = router;