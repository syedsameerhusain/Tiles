const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../Modals/Profile');
const User = require('../../Modals/Users');
const { check, validationResult } = require('express-validator');
//@route GET api
router.get('/all', auth, async (req, res) => {
  try {
    const profile = await Profile.find({
      user: req.user.id,
    });
    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Sever Error');
  }
});
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Please enter a valid name')
        .notEmpty()
        .isLength({ min: 5, max: 20 }),
      check('date', 'Please enter date').notEmpty(),
      check('Phone_no', 'Please enter a valid phone no.')
        .notEmpty()
        .isLength({ max: 10 }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { name, date, Organisation_name, Rating, Phone_no } = req.body;
    let id = req.user.id;
    let user;
    try {
      user = await User.findById(id, (err) => console.log(err));
      if (user) {
        let profile = new Profile({
          user,
          name,
          date,
          Organisation_name,
          Phone_no,
          Rating,
        });
        if (!profile) {
          return res.status(500).send('Server Error,Profile not created');
        }
        await profile.save((err, profile) => {
          if (err) return console.error(err);
          console.log(' saved to bookstore collection.');
        });
        res.status(400).json({ profile });
      }
    } catch (error) {
      console.log(errors);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
/*try {const salt = await bcrypt.genSalt(10);
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
      ); */
