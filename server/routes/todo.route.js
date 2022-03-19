const express = require("express");
const { createTodo, updateEmail, getAllTodos, deleteTodo } = require("../controller/todo.controller");
const router = express.Router();

// 
router.route("/create").post(createTodo);
// 
router.route("/updateEmail/:id").put(updateEmail);
router.route("/getAllTodos").get(getAllTodos);
router.route("/deleteTodo/:id").delete(deleteTodo);


module.exports = router;