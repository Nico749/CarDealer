const router = require('express').Router();
const { Car, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all pets and JOIN with user data
    const carData = await Car.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const cars = carData.map((car) => car.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', 
    { 
      cars, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
