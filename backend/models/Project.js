const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true],
  },
  visibility: {
    type: String,
    trim: true,
    required: [true],
  },
  owner: {
    type: String,
    trim: true,
    required: [true],
  },
  description: {
    type: String,
    trim: true,
    required: [false],
  },
  members: {
    type: [String],
    required: [false],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
