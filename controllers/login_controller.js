const user = require("../models/user_model.js");
const { setUser, verifyUser } = require("../services/user_auth.js");
async function login_user(req, res) {
  // Handle login logic here
//   console.log(req.body);
const{username,password}=req.body;
const foundUser=await user.findOne({username});
if(!foundUser){
  return res.render("login_page", { message: "Invalid username or password" });
}
if(foundUser.password!==password){
  return res.render("login_page", { message: "Invalid username or password" });
}
if(foundUser && foundUser.password===password){
  const token=setUser(foundUser);
  res.cookie("uid",token);
}
res.render("home");
}
module.exports = login_user;