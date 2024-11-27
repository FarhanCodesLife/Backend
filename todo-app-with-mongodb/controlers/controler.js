import mongoose from "mongoose"; // Fixed `mangoose` typo
import User from "../module/module.js";

// Add User
const addUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try{

      const existingUser = await User.findOne({ email });
      
      if (existingUser) {
          return res.status(400).json({
              message: "Email is already in use!",
            });
        }
    }catch(error){
        console.log("error in email");
        

    }

  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({
      message: "All fields are required!",
    });
  }

    try {

    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password,
    });

    res.status(201).json({
      message: "User added successfully!",
      user: {
        id: newUser._id,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add user.",
    });
  }
};

// Get All Users
const AllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users.",
    });
  }
};

// Delete User
const Deleteuser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid user ID.",
    });
  }

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    res.status(200).json({
      message: "User deleted successfully!",
      user: {
        id: deletedUser._id,
        firstname: deletedUser.firstname,
        lastname: deletedUser.lastname,
        email: deletedUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete user.",
    });
  }
};

export { AllUser, addUser, Deleteuser };
