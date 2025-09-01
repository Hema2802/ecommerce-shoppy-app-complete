
import mongoose from 'mongoose';

// created schema for users

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "User name is required*"],
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "Email is required*"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
  },
  password: {
    type: String,
    required: [true, "Password is required*"],
    minlength: 3,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userModel =mongoose.model("User", userSchema);

export default userModel;