const Student = require('../models/studentModel');

const getAllStudents = async () => {
  return await Student.find().populate('classId');
};

const createStudent = async (name, classId) => {
  const student = new Student({ name, classId });
  return await student.save();
};

const updateStudent = async (id, name, classId) => {
  return await Student.findByIdAndUpdate(id, { name, classId }, { new: true });
};

const deleteStudent = async (id) => {
  return await Student.findByIdAndDelete(id);
};

module.exports = {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent
};
