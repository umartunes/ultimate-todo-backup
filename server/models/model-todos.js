"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var todosSchema = new Schema({
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        trim: true,
        default: 'pending'
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    place: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    }
});
var Todos = mongoose.model('Todos', todosSchema);
exports.default = Todos;
//# sourceMappingURL=model-todos.js.map