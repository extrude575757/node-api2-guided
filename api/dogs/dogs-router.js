<<<<<<< HEAD
const express= require('express')


const router = express.Router();
const Dog = require('./dogs-model')
// DOGS ENDPOINTS
router.get('/', (req, res) => {
    Dog.find()
      .then(dogs => {
        res.status(200).json(dogs);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error retrieving the dogs',
        });
      });
  });

=======
const express = require('express');
const Dog = require('./dogs-model');
const router = express.Router();

// DOGS ENDPOINTS
// DOGS ENDPOINTS
// DOGS ENDPOINTS
router.get('/', (req, res) => {
  Dog.find()
    .then(dogs => {
      res.status(200).json(dogs);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the dogs',
      });
    });
});

module.exports = router
>>>>>>> 055a5e23e5c45f2beabfab5c89054971d6843d5e
