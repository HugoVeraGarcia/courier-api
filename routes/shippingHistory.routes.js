const express = require('express');
const router = express.Router();

// Controllers
const {
	showHistory
} = require('../controllers/shippingHistory.controller');

router.get('/:shipping_id',showHistory);

module.exports = router;