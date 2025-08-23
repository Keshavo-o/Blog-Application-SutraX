const user = require("../models/user_model.js");
async function signup(req, res) {
  // Your signup logic here
  const { email, username, password, confirmpassword } = req.body;
  if (password !== confirmpassword) {
    return res.render("signup", { message: "Passwords do not match" });
  }
  const salt = "temp";
  const newUser = new user({
    username,
    email,
    password,
    salt
  });
  await newUser.save();
  res.redirect("/login");
}

module.exports = signup;
