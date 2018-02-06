const express = require('express');
const router = express.Router();
const models = require('../models');
/* GET users listing. */
router.get('/', function (req, res, next) {
  models.User.findAll().then(users => {
    res.json({ users: users });
  })

});


router.post('/new', function (req, res, next) {
  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }).then((user) => {
    res.send({ users: user });
  })
});

module.exports = router;
