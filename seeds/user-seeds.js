const User = require('../models/User');

const userData = [
    {
        name: "Joe Kalston",
        email: "joekalston@yahoo.com",
       
        password: "password1"
    },
    {
        name: "Jane Doe",
        email: "janedoe@fakemail.com",
      
        password: "password2"
    },
    {
        name: "Kenneth Sy",
        email: "kensy@gmail.com",
      
        password: "password3"
    },
   
   
];

const seedUsers = () => User.bulkCreate(userData,{
    individualHooks: true,
    returning: true,
  
});

module.exports = seedUsers;