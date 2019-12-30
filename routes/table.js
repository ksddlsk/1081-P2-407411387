var express = require('express');
var router = express.Router();

const speakersController = 
require("../controllers/speakersController");
router.get("/speakers",speakersController.getSpeakers);

// router.get('/speakers', function(req, res, next) {
//   res.render('speakers', { title: 'speakers' });
// });

module.exports = router;
