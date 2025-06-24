   import express from 'express'
   import User from '../db/models/user.js'

    import jwt from 'jsonwebtoken'
   const JWT_SECRET = "greenmacha"

   const router = express.Router();

router.post("/signup",async function(req, res) {
  let {username,email,password}  = req.body;


    console.log(username)
    console.log(password)
    

    if(email){
        const data = await User.create({
            username,
            email,
            password
        })

        res.json({
            message:"you are in"
        })
    }


    
    

    
})

router.post('/signin/:username',async (req,res)=>{
      const username = req.params.username;

      const user = await User.findOne({
        username
      })

      if(user){
        const token  = jwt.sign(username,JWT_SECRET);
        res.json({
            token:token
        })
      }else{
        res.json({
            message:"not a valid user"
        })
      }


})





 export default router;