export const errorMiddleware = (err , req , res , next)=>{


    err.message = err.message || "internal server error";
    res.status(404).json({
        success : fale ,
        message : err.message,
    })

};