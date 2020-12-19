const router = require('express').Router();
const {
    createStudent,
    getAllStudents,
    updateStudent,
    deleteStudent,
    getSingleStudent } = require('../controllers/studentController');

router.post('/students', createStudent);
router.get('/students', getAllStudents);
router.patch('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);
router.get('/students/:id', getSingleStudent);


module.exports = router;