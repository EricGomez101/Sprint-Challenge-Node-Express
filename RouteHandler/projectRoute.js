const express = require('express');
const projectModel = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
  projectModel.get()
  .then(projects => {
    res.json(projects);
  })
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  projectModel.get(id)
  .then(project => {
    res.json(project);
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
  })
})
router.put('/:id', (req, res) => {
  const {id} = req.params;
  const update = req.body;
  projectModel.update(id, update)
  .then(response => {
    res.json(response);
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
  })
})
module.exports = router;
