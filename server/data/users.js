var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    var result = null;
    if (req.query.name == "zz") {
        result = {
            uniqueId: 1,
            loginName: 'admin01',
            email: '12@qq.com'
        };
    } else {
        result = {
            uniqueId: 1,
            loginName: 'admin02',
            email: '36@qq.com'
        };
    }
    res.json(result);
});





module.exports = router;
