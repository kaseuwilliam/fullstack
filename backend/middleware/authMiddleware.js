const jwt = require("jsonwebtoken")

function authenticateToken(req, res, next){

    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]

    if(!token){
        return res.status(403).json({message:"Token is missing"})
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{

        if(err){
            return res.status(403).json({message:"Invalid Token"})
        }

        req.user = decoded;

        next()

    })


}


module.exports = authenticateToken;