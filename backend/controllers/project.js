const Project = require("../models/Project");
const User = require("../models/User");

// @desc    Get all public projects
// @route   GET /api/v1/projects
// @access  public
exports.getProjects = async (_req, res, _next) => {
  try {
    const projects = await Project.find({ visibility: "Public" });
    return res.status(200).json({
      succcess: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    res.send(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc    Create a project
// @route   POST /api/v1/projects/create
// @access  public
exports.createProject = async (req, res, _next) => {
  try {
    const { name, visibility, description, owner } = req.body;

    const ownerObject = await User.findOne({ name: owner });

    const project = await Project.create({
      name,
      visibility,
      description,
      owner,
      members: [ownerObject.username],
    });

    return res.status(201).json({
      success: true,
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc    Join a project
// @route   POST /api/v1/projects/join
// @access  public
exports.joinProject = async (req, res, _next) => {
  try {
    const { userId, projectId } = req.body;

    let project = await Project.findById({ _id: projectId });

    if (!project)
      return res.status(404).json({
        success: false,
      });

    const user = await User.findById({ _id: userId });

    await project.updateOne({
      members: [...project.members, user.username],
    });

    project = await Project.findById({ _id: projectId });

    return res.status(201).json({
      success: true,
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc    Delete a project
// @route   /api/v1/projects/:id
// @access  public
exports.deleteProject = async (req, res, _next) => {
  try {
    const projectId = req.params.id;

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({
        success: false,
        error: "No project found",
      });
    }

    project.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};
