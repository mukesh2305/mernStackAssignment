const Todo = require("../model/todo.model");
const ApiFeatures = require("../utils/apiFeatures");

// Create Todo
exports.createTodo = async (req, res, next) => {
    try {
        const todo = await Todo.create(req.body);

        res.status(201).json({
            success: true,
            todo,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        });
    }
};

// Get All Todos
exports.getAllTodos = async (req, res, next) => {
    try {
        const resultPerPage = 4;
        const todosCount = await Todo.countDocuments();
        const apiFeatures = new ApiFeatures(Todo.find(), req.query)
        apiFeatures.pagination(resultPerPage);
        let todos = await apiFeatures.query;

        res.status(200).json({
            success: true,
            todos,
            todosCount,
            resultPerPage,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        })
    }
}

// Update Email 
exports.updateEmail = async (req, res) => {
    try {
        let todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(500).json({
                success: false,
                message: "Todo not found",
            });
        }
        todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            findByIdAndUpdate: true,
        });
        res.status(200).json({
            success: true,
            todo,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        })
    }
};

// Delete Todo 
exports.deleteTodo = async (req, res) => {
    try {
        let todo = await Todo.findById(req.params.id);

        if (!todo) {
            return next(new ErrorHandler("Product not found", 404));
        }
        await todo.remove();
        res.status(200).json({
            success: true,
            message: "Todo deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}
