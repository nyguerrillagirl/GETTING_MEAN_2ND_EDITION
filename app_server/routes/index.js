const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
//const ctrlMain = require('../controllers/main');

// const homepageController = (req, res) => {
//   res.render('index', { title: 'Express'});
// };

/* Location pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);


module.exports = router;
