const JWT_SECRET = "greenmacha"
  import jwt from 'jsonwebtoken'

     const usermiddleware =  function auth(req,res,next){
            const token = req.headers.token;

                 if(!token){
                    res.json({
                        meassage:"invalid user"
                    })
                 }


            console.log(token)
            const decodedData =jwt.verify(token,JWT_SECRET)
            console.log(decodedData)
                if(decodedData)
                {
                    req.username = decodedData;
                    console.log(req.username);
                    next();
                }
                else{
                    res.status(403).send("incorrect credentials")
                }
}
  

export default usermiddleware;