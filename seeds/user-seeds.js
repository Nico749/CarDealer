const User = require('../models/User');

const userData = [
    {
        name: "Joe Kalston",
        email: "joekalston@yahoo.com",
        phone: "987612345",
        password: "password1"
    },
    {
        name: "Jane Doe",
        email: "janedoe@fakemail.com",
        phone: "987612345",
        password: "password2"
    },
    {
        name: "Kenneth Sy",
        email: "kensy@gmail.com",
        phone: "987612345",     
        password: "password3"
    },
   
   
];

const seedUsers = () => User.bulkCreate(userData,{
    individualHooks: true,
    returning: true,
  
});

module.exports = seedUsers;