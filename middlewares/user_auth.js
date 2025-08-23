const { setUser, verifyUser } = require("../services/user_auth.js");
async function user_auth(req,res,next) {
  // Your authentication logic here
  if(!req.cookies.uid) {
    return res.redirect("/login");
  }
  const uid = req.cookies.uid;
  try{
    const user = verifyUser(uid);
    req.user = user;
  }
  catch{
    return res.redirect("/login");
  }
  // console.log(uid);
  next();
}

module.exports = user_auth;
