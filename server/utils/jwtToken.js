import { EXPIRE_DAY } from "../constant.js";

// CREATING TOKENS AND SAVING IN COOKIE
const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();

    // options for cookie
    const options = {
        expires: new Date(
            Date.now() + EXPIRE_DAY.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),    
        httpOnly: true,
        sameSite: "None", // Set SameSite attribute to None for cross-site usage
        secure: true,     // Set secure flag when using SameSite=None
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token,
    });
}

export default sendToken;