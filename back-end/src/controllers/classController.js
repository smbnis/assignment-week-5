const classService = require('../services/classService');

const getAllClasses = async (req, res) => {
  try {
    const classes = await classService.getAllClasses();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createClass = async (req, res) => {
  try {
    const newClass = await classService.createClass(req.body.name);
    res.status(201).json(newClass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateClass = async (req, res) => {
  try {
    const updatedClass = await classService.updateClass(req.params.id, req.body.name);
    res.json(updatedClass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteClass = async (req, res) => {
  try {
    await classService.deleteClass(req.params.id);
    res.json({ message: 'Class deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllClasses,
  createClass,
  updateClass,
  deleteClass
};
