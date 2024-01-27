import { app } from "./app.js";
import { connectDb } from './data/database.js'

connectDb();
app.use((req , res , next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
})
app.listen(5000,()=>{

    console.log(`server is working on ${process.env.NODE_ENV}`);
})
