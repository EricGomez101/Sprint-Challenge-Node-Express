const express = require('express');
const projectModel = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
  projectModel.get()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({error: err});
  })
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  projectModel.get(id)
  .then(project => {
    res.json(project);
  })
  .catch(err => {
    res.status(500).json({error: err});
  })
})

router.post('/', (req, res) => {
  const newProject = req.body;
  projectModel.insert(newProject)
  .then(obj => {
    projectModel.get(obj.id)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({error: err});
    })
  })
})
router.put('/:id', (req, res) => {
  const {id} = req.params;
  const update = req.body;
  projectModel.update(id, update)
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.status(500).json({error: err});
  })
})
router.delete('/:id', (req, res) => {
  const {id} = req.params;
  projectModel.get(id)
  .then(project => {
    projectModel.remove(id)
    .then(response => {
      if (response) {
        res.json(project);
      }
    })
    .catch(err => {
      res.status(404).json({error: err});
    })
  })
})
module.exports = router;
