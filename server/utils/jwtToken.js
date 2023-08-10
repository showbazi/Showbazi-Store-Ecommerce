import { EXPIRE_DAY } from "../constant.js";

// CREATING TOKENS AND SAVING IN COOKIE
const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();

    console.log('TOKEN: GENERATED')

    // options for cookie
    const options = {
        expires: new Date(
            Date.now + EXPIRE_DAY.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),    
        httpOnly: true,
    };

    console.log('TOKEN OPTIONS:', options)

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token,
    });
}

export default sendToken;