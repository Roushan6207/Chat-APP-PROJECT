import jwt from "jsonwebtoken"
export const generateTokens= (userId,res) => {

    const token= jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d"
    });

    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000,  // expresse in millisecond...
        httpOnly:true, // prevent form attack from XSS...
        sameSite:"strict",// prevent form CSrf  attack...
        secure:process.env.NODE_ENV !== "development",
    });

    return token;
}