import { Task } from "../model/task.js";



export const newTask = async (req  , res  , next)=>{

  try {
    const {title , description}  = req.body;

    await Task.create({
      title , description , user : req.user,
  
    })
      
  
    res.status(201).json({
      success : true , 
      message : "Task added Successfully",
    })
  } catch (error) {
    next(error);
  }
}


export const getMyTask =async(req , res , next)=>{

    try {     
   const userid = req.user_id ;
  const tasks = await Task.find({user : userid});
    res.status(200).json({
        success : true , 
        tasks
    })

    } catch (error) {
        next(error)
    }
}
export const updateTask =async(req , res , next)=>{
try {
    
    const {id} = req.params ; 
 
    const task = await Task.findById(id);
    if(!task){
        return res.status(404).json({
            success : false ,
            message : "Invalid id"
        })
       }
    task.isCompleted = !task.isCompleted;
 
    await task.save();

    res.status(200).json({
        success : true , 
        message : "Task updated!"
      
    })

} catch (error) {
    next(error);
}
}
export const deleteTask =async(req , res , next)=>{

  try {
    const {id} = req.params ; 

    const task = await Task.findById(id);
  
    if(!task){
        return res.status(404).json({
            success : false ,
            message : "Invalid id"
        })
       }
 
 
    await task.deleteOne();
     res.status(200).json({
         success : true , 
         message : "Task Deleted!"
        
     })
 
    
  } catch (error) {
    
    next(error);
  }
}