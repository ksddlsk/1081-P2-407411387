var express = require('express');
var router = express.Router();

const midprojectController = 
require("../controllers/midprojectController");
router.get("/midproject",midprojectController.getMidproject);

// router.get('/midproject', function(req, res, next) {
//   res.render('midproject', { title: 'Midproject' });
// });

module.exports = router;
