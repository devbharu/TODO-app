import express from 'express';
import Todo from '../db/models/todo.js'
import usermiddleware from '../middleware/usermiddleware.js';
const router = express.Router();


router.post('/addtodo',usermiddleware,async (req,res)=>{
       const {title,done} = req.body;
     
       try{
             
        await Todo.create({
            name:req.username,
            todo:{
                title:title,
                completed:done
            }
           
        })

        res.json({
            meassage:"your todo created"
        })


       }catch(e){
        res.json({
            message:"no user found on the id"
        })
       }
       
})

router.post('/uptodo',usermiddleware,async (req,res)=>{
       const {username,title,uptitle,updone}  =  req.body;
          
     const usertodo = await Todo.findOne({
        name:username,
         'todo.title':title
     })

     usertodo.todo.title = uptitle;
     usertodo.todo.completed = updone;
        
     await usertodo.save();
    
      res.json({
        meassage:"updated todo"
      })
       
})

router.get('/gettodo/:username',usermiddleware,async (req,res)=>{
       const {username} = req.params;
    try{

           
            const usertodo = await Todo.find({
            name:username
            })

            res.json({
            todo: usertodo
            })
    }
    catch(e){
        res.json({
            meassage:"can't find"
        })
    }

})

router.delete('/deletetodo',usermiddleware,async (req,res)=>{
       const {username,title,done} = req.body
        try{
            await Todo.findOneAndDelete({
        name:username,
            'todo.title':title,
            'todo.completed':done
        })

        res.json({
        meassage:"todo delted succesfully"
        })
    }catch(e){
        res.json({
            message:"can't delete"
        })
    }
})

export default router;
