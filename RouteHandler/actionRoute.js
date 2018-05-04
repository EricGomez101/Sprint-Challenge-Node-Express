const express = require('express');
const AM = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', (req, res) => {
  AM.get()
  .then(actions => {
    res.json(actions);
  })
  .catch(err => {
    res.status(500).json({error: err});
  })
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  AM.get(id)
  .then(action => {
    res.json(action);
  })
  .catch(err => {
    res.status(500).json({error: err});
  })
})

router.post('/', (req, res) => {
  const newAction = req.body;
  AM.insert(newAction)
  .then(action => {
    res.status(201).json(action)
  })
  .catch(err => {
    res.status(500).json({error: err});
  })
})

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const update = req.body;
  AM.update(id, update)
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.status(500).json({error: err});
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
    .catch(err => {
      res.status(404).json({error: err});
    })
  })
  .catch(err => {
    res.status(500).json({error: err});
  })
})
module.exports = router;
