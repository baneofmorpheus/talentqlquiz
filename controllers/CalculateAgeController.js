const { validationResult } = require('express-validator');

exports.calculateAgeInYears = async (req, res) => {
  try {
    /**
     * Handle validation error
     */

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0]['msg'] });
    }

    /**
     * Get number of milliseconds in one year
     */
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    /**
     * Convert timestamp to number from string and get birthDate object
     */
    const birthDate = new Date(parseInt(req.query.dob, 10));
    const currentDate = new Date();

    const diffinDateInMilliseconds = currentDate - birthDate;

    /**Convert to yearts */
    const diffinDateInYears = Math.round(diffinDateInMilliseconds / year);

    return res
      .status(200)
      .json({ msg: 'Age calculated successfully', age: diffinDateInYears });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
