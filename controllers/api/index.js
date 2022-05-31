const router = require('express').Router();
const userRoutes = require('./userRoute');
const carRoutes = require('./carRoute');

router.use('/users', userRoutes);
router.use('/cars', carRoutes);

module.exports = router;
