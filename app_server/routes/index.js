var express = require('express');
var router = express.Router();
const crtlMain = require('../controllers/main');

const homepageController = (req, res) => {
  res.render('index', { title: 'Express'});
};

/* GET home page. */
router.get('/', crtlMain.index);

module.exports = router;
