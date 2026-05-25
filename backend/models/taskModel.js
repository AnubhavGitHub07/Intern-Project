const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        requie: true,
        trim: true,
    },

    description: {
        type: String,
    },

    status: {
        type: String,
        enum: ["todo" , "in-progress", "done"],
        default: "todo",
    },

    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

},



{
    timestamps: true,

});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;