const asyncHandler = require("express-async-handler");
const User = require("../models/Usermodel");
const { generatetoken } = require("../utils/generatetoken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userexists = await User.findOne({ email });

  if (userexists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generatetoken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  console.log(email, password);

  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generatetoken(user._id),
    });
  } else {
    res.status(401);
    console.log("vaibhav");
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { registerUser, authUser };
