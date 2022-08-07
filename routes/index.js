const express = require('express');
const { query } = require('express-validator');

const { rateLimiterUsingThirdParty } = require('../middleware/rateLimiter');
const calculateAgeController = require('../controllers/CalculateAgeController');

const router = express.Router();

router.use(rateLimiterUsingThirdParty);
router.get(
  '/howold',
  query('dob').exists({ checkNull: true, checkFalsy: true }).isInt(),
  calculateAgeController.calculateAgeInYears
);

module.exports = router;
