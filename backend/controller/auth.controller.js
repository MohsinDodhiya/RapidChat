import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password, confirmPass, gender } = req.body;

  let validUser = await User.findOne({ email });

  if (validUser) {
    // return res.status(400).json({
    //     success: false,
    //     message: "User already exists"
    // });
    return next(errorHandler(400, "User already exists"));
  }
  if (password !== confirmPass) {
    // return res.status(400).json({
    //     error: "Passwords don't match"
    // });
    return next(errorHandler(400, "Password Don't Match"));
  }

  const hashedPass = await bcryptjs.hash(password, 10);

  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

  const newUser = new User({
    username,
    email,
    password: hashedPass,
    gender,
    profilepic: gender === "male" ? boyProfilePic : girlProfilePic,
  });
  try {
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "30m",
    });

    await newUser.save();

    res.cookie("access_token", token, { httpOnly: true }).status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      profilepic: newUser.profilepic,
    });
  } catch (error) {
    // console.log("Error: " + error);
    // res.status(500).json({
    //     error: "Internal Server Error"
    // });
    next(errorHandler(500, "Internal Server Error"));
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    const validPass = bcryptjs.compareSync(password, validUser.password);
    if (!validPass) {
      return next(errorHandler(401, "Wrong Credentials"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "30m",
    });

    // Send the token and user info in the same response
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({
        message: "Login successful",
        token, // Send the token here
        user: {
          _id: validUser._id,
          username: validUser.username,
          email: validUser.email,
          profilepic: validUser.profilepic,
        },
      });
  } catch (error) {
    next(errorHandler(500, "Internal Server Error"));
  }
};

export const logout = (req, res, next) => {
  res.clearCookie("access_token");
  res.status(200).json({
    message: "User has been successfully Log-Out",
  });
};
