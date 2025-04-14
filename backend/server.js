const express = require("express")
const jwt = require('jsonwebtoken')
JWT_SECRET="Greenmacha";

import connectdb from './db/config'


app = express()
app.use(express.json())
 

connectdb();


/*function auth(req,res,next){
const token = req.headers.token;
 console.log(token)
const decodedData=jwt.verify(token,JWT_SECRET)
    console.log(decodedData)
if(decodedData)
{
    req.username=decodedData.username;
    next();
}
else{
    res.status(403).send("incorrect credentials")
}

}*/

 





app.post("/signup", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    arr.push({
        username: username,
        password: password
    })
console.log(username)
console.log(password)
    // we should check if a user with this username already exists

    res.json({
        message: "You are signed up",
        
    })
})





app.post("/signin",auth,function(req,res){
     let username = req.body.username;
       let password = req.body.password;
        let foundUser = null;
     
        for(let i=0;i<arr.length;i++)
       {
           if(arr[i].username===username&&arr[i].password===password)
                 {
                  foundUser=arr[i];
                 }

       }


           if(foundUser)
          {
         const token = jwt.sign(foundUser.username,JWT_SECRET)

         res.json({
            
            token:token
          } )

          
            

        }
           else{
            res.json({
            
                message:"wrong crendentials"}
                )
       



    
            }
})

function auth(req, res, next) {
    const token = req.headers.token;
    console.log(token);
    const decodedData = jwt.verify(token, JWT_SECRET);
console.log(decodedData)
    if (decodedData) {
        // req = {status, headers...., username, password, userFirstName, random; ":123123"}
        req.username = decodedData
        console.log("data recived");
        next();
    } else {
        res.json({
            message: "You are not logged in"
        })
    }
}

app.get("/me", auth, function(req, res) {
    // req = {status, headers...., username, password, userFirstName, random; ":123123"}
    const currentUser = req.username;
    console.log("data recived");
    // const token = req.headers.token;
    // const decodedData = jwt.verify(token, JWT_SECRET);
    // const currentUser = decodedData.username
 
})


app.listen(3000)