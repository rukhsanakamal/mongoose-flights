const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');
const destinationCtrl = require('../controllers/destinations')

/* GET /flight/new. */

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);
router.post('/:id', destinationCtrl.create)

module.exports = router;
