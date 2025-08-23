const user = require("../models/user_model.js");
const {
  hashPassword,
  verifyPassword
} = require("../services/password_encryption.js");


async function signup(req, res) {
  // Your signup logic here
  const { email, username, password, confirmpassword } = req.body;
  if (password !== confirmpassword) {
    return res.render("signup", { message: "Passwords do not match" });
  }
  const { salt, hash } = hashPassword(password);
  const newUser = new user({
    username,
    email,
    password: hash,
    salt
  });
  await newUser.save();
  res.redirect("/login");
}

module.exports = signup;
