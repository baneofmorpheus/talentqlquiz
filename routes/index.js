const express = require('express');
const { query } = require('express-validator');

const { rateLimiterUsingThirdParty } = require('../middleware/rateLimiter');
const calculateAgeController = require('../controllers/CalculateAgeController');

const router = express.Router();

router.use(rateLimiterUsingThirdParty);
router.get(
  '/howold',
  query('dob')
    .exists({ checkNull: true, checkFalsy: true })
    .isInt()
    .custom((value) => {
      /**
       * Check if timestamp is valid date timestamp
       */
      const dateObject = new Date(value);

      if (dateObject.getTime() > 0) {
        return;
      }
      throw new Error('invalid dob format');
    }),
  calculateAgeController.calculateAgeInYears
);

module.exports = router;
