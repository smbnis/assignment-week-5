const Class = require('../models/classModel');

const getAllClasses = async () => {
  return await Class.find();
};

const createClass = async (name) => {
  const cls = new Class({ name });
  return await cls.save();
};

const updateClass = async (id, name) => {
  return await Class.findByIdAndUpdate(id, { name }, { new: true });
};

const deleteClass = async (id) => {
  return await Class.findByIdAndDelete(id);
};

module.exports = {
  getAllClasses,
  createClass,
  updateClass,
  deleteClass
};
