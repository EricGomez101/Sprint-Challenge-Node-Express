const express = require('express');
const AM = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', (req, res) => {
  AM.get()
  .then(actions => {
    res.json(actions);
  })
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  AM.get(id)
  .then(action => {
    res.json(action);
  })
})

router.post('/', (req, res) => {
  const newAction = req.body;
  AM.insert(newAction)
  .then(action => {
    res.status(201).json(action)
  })
})

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const update = req.body;
  AM.update(id, update)
  .then(response => {
    res.json(response);
  })
})

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  AM.get(id)
  .then(action => {
    AM.remove(id)
    .then(response => {
      if (response) {
        res.json(action);
      } else {
        res.status(404).json({error: 'back request'});
      }
    })
  })
})
module.exports = router;
