const jwt = require("jsonwebtoken");
const my_secret_key = "Keshav@123"

function setUser(user)
{
    const payload = {
        id: user._id,
        username: user.username
    };
    const token = jwt.sign(payload, my_secret_key, { expiresIn: "1h" });
    return token;
}
function verifyUser(token)
{
    return jwt.verify(token, my_secret_key);
}
module.exports = { setUser, verifyUser };