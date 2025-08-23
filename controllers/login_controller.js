const user = require("../models/user_model.js");
const { setUser, verifyUser } = require("../services/user_auth.js");
const {
  hashPassword,
  verifyPassword
} = require("../services/password_encryption.js");
async function login_user(req, res) {
  // Handle login logic here
//   console.log(req.body);
const{username,password}=req.body;
const foundUser=await user.findOne({username});
if(!foundUser){
  return res.render("login_page", { message: "Invalid username or password" });
}
const isPasswordValid=verifyPassword(password,foundUser.salt,foundUser.password);
console.log(isPasswordValid);
if(isPasswordValid){
  const token=setUser(foundUser);
  res.cookie("uid",token);
  return res.redirect("/");
}
res.render("login_page", { message: "Invalid username or password" });
}
module.exports = login_user;