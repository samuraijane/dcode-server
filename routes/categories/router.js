const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const {Category} = require('./model');

router.get('/', (req, res) => {
  Category
    .find()
    .exec()
    .then(categories => {
      res.json({
        categories: categories.map( category => category.apiRepr() )
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({message: 'Internal server error'});
    });
});

router.get('/:id', (req, res) => {
  Category
    .findById(req.params.id)
    .exec()
    .then( category => {
      res.json({
        categories: category.apiRepr()
      })
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({message: 'Internal server error'});
    });
});

module.exports = {router};
