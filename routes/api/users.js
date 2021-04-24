const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../Modals/Users');
const jwt = require('jsonwebtoken');
const config = require('config');
//@route GET api
router.post(
  '/',
  [
    check('name', 'Please enter a valid name')
      .notEmpty()
      .isLength({ min: 5, max: 20 }),
    check('email', 'Please enter a valid email').notEmpty().isEmail(),
    check('password', 'Please enter a password with minimum length 6')
      .notEmpty()
      .isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { name, email, password } = req.body;
    let user;
    try {
      user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exist' }] });
      }
      user = new User({
        name,
        email,
        password,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(errors);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
