var express = require('express');
var router = express.Router();

//todo model
var Todo = require('../../models/Todo');

// @route api/todos
// @desc Get all Todos
// @access public
router.get('/', (req, res) => {
    Todo.find()
        .sort({ date: -1 })
        .then(todos => res.json(todos));
});

// @route api/todos
// @desc Get all Todos
// @access public
router.get('/:id', (req, res) => {
    Todo.findById({ _id: req.params.id })
        .then(todos => res.json(todos))
        .catch(err => res.status(404).json({ success: "Not found" }));
});


// @route api/todos
// @desc POST all Todos
// @access public
router.post('/', (req, res) => {
    const newTodo = new Todo({
        title: req.body.title,
        desc: req.body.desc,
    });
    newTodo.save().then(todo => res.json(todo));
})

// @route api/todos/markComplete/:id
// @desc Edit a Todo
// @access public
router.get('/markComplete/:id', (req, res) => {
    Todo.findOneAndUpdate({ _id: req.params.id }, { isCompleted: true })
        .then(todo => res.json({ todo, success: true }))
        .catch(err => res.status(404).json({ success: false }));
})

// @route api/todos:id
// @desc DELETE a Todo
// @access public
router.delete('/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => todo.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})

module.exports = router;