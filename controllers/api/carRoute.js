const router = require('express').Router();
const { Car } = require('../../models');
const withAuth = require('../../utils/auth');

//post a new car
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

//delete an existing car
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

// Display add gig form
router.get('/add', (req, res) => res.render('add'));

// Add a gig
router.post('/add', (req, res) => {
  let { title, technologies, budget, description, contact_email } = req.body;
  let errors = [];

  // Validate Fields
  if(!title) {
    errors.push({ text: 'Please add a title' });
  }
  if(!technologies) {
    errors.push({ text: 'Please add some technologies' });
  }
  if(!description) {
    errors.push({ text: 'Please add a description' });
  }
  if(!contact_email) {
    errors.push({ text: 'Please add a contact email' });
  }

  // Check for errors
  if(errors.length > 0) {
    res.render('add', {
      errors,
      title, 
      technologies, 
      budget, 
      description, 
      contact_email
    });
  } else {
    if(!budget) {
      budget = 'Unknown';
    } else {
      budget = `$${budget}`;
    }

    // Make lowercase and remove space after comma
    technologies = technologies.toLowerCase().replace(/,[ ]+/g, ',');

    // Insert into table
    Gig.create({
      title,
      technologies,
      description,
      budget,
      contact_email
    })
      .then(gig => res.redirect('/gigs'))
      .catch(err => res.render('error', {error:err.message}))
  }
});


module.exports = router;
