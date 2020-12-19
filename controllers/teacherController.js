const Teacher = require("../models/Teachear");

const createTeacher = async (req, res) => {
    try {
        const teacher = new Teacher(req.body);
        const result = await teacher.save();
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find({}).sort({name: 1, _id: 1});;
        res.status(200).send(teachers);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getSingleTeacher = async (req, res) => {
    try {
        const _id = req.params.id;
        const teacher = await Teacher.findOne({ _id })
        res.status(200).send(teacher);
    } catch (err) {
        res.status(404).send(err);
    }
}
const deleteSingleTeacher = async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await Teacher.findOneAndDelete({ _id });
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}

const updateSingleTeacher = async (req, res) => {
    try {
        const _id = req.params.id;
        const update = await Teacher.findOneAndUpdate({ _id }, {
            $set: req.body
        }, {
            new: true,
        });
        res.status(200).send(update);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = { createTeacher, getAllTeachers, getSingleTeacher, deleteSingleTeacher, updateSingleTeacher }