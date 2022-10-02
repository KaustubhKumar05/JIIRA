const User = require("../models/User");

// @desc    Get all users
// @route   GET /api/v1/users
// @access  public
exports.getUsers = async (_req, res, _next) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      succcess: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.send(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc    Get a user
// @route   GET /api/v1/users/:id
// @access  public
exports.getUserById = async (req, res, _next) => {
  try {
    const userId = req.params.id;

    const user = await User.findById({ _id: userId });

    if (!user)
      return res.status(404).json({
        success: false,
      });

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.messages);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server error",
      });
    }
  }
};

// @desc    Create a user
// @route   POST /api/v1/users
// @access  public
exports.createUser = async (req, res, _next) => {
  try {
    const { name, emailAddress, username, role } = req.body;

    const user = await User.create({ name, emailAddress, username, role });
    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.messages);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server error",
      });
    }
  }
};

// @desc    Delete a user
// @route   DELETE /api/v1/users/:id
// @access  public
exports.deleteUser = async (req, res, _next) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    // Get the owner of project

    if (!userId) {
      return res.status(404).json({
        success: false,
        error: "No project found",
      });
    }

    user.remove();

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
