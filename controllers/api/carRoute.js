const router = require('express').Router();
const { Car } = require('../../models');
const withAuth = require('../../utils/auth');

//post a new pet
router.post('/', withAuth, async (req, res) => {
  try {
    const newCar = await Car.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPet);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete an existing pet
router.delete('/:id', withAuth, async (req, res) => {
  //console.log(`the id you passed is ${req.params.id}`)
  try {
    const carData = await Car.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
      
    });
    console.log(carData)

    if (!carData) {
      res.status(404).json({ message: 'No car found with this id!' });
      return;
    }

    res.status(200).json(carData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
