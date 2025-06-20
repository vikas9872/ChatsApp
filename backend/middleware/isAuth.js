import jwt from "jsonwebtoken"
const isAuth=async(req, res, next)=>{
    try {
        // get the token from cookies
        let token=req.cookies.token;
        // if token is not present
        if(!token){
            return res.status(400).json({message:"Token is not found"})
        }
        // if token found verify it
        let verifiedToken=await jwt.verify(token,process.env.JWT_SECRET)
        console.log(verifiedToken)
        // send the user id into userId using request
        req.userId=verifiedToken.userId;
        next()
    } catch (error) {
        return res.status(500).json({message: `Error found in middleware: ${error}`})
    }
}
export default isAuth;