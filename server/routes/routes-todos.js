"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var router = express.Router();
const model_todos_1 = require("../models/model-todos");
const auth_required_1 = require("../middlewares/auth-required");
router.get('/', auth_required_1.default, (req, res) => {
    let $query = {};
    model_todos_1.default.find($query).sort({ date: -1 }).exec((err, todos) => {
        if (!todos || !todos.length) {
            res.t.message = "No Todos available";
            return res.send(res.t);
        }
        res.t.success = true;
        res.t.message = "Todos Found";
        res.t.data = todos;
        return res.send(res.t);
    });
});
router.post('/', auth_required_1.default, function (req, res) {
    // console.log(req.body)
    // console.log(req.body.moreInfo)
    if (!req.body.title || !req.body.place || !req.body.description) {
        res.t.message = "Invalid Request";
        return res.send(res.t);
    }
    let todo = new model_todos_1.default({
        authorId: req.user._id,
        title: req.body.title.trim(),
        place: req.body.place.trim(),
        description: req.body.description.trim(),
    });
    todo.save(function (err, todo) {
        res.send(err ? err : todo);
    });
});
router.get('/:id', auth_required_1.default, function (req, res) {
    let { id } = req.params;
    model_todos_1.default.findById(id).exec(function (err, todo) {
        if (!todo) {
            res.t.message = "Todo not available";
            return res.send(res.t);
        }
        res.t.success = true;
        res.t.message = "Todo Found";
        res.t.data = todo;
        return res.send(res.t);
    });
});
exports.default = router;
//# sourceMappingURL=routes-todos.js.map