import express from "express";
import mongoose from "mongoose"
import { PORT, mongoDBURL } from "./config.js" 
import bookRoute from "./routes/bookRoute.js"
import cors from "cors"

// Configure server
const app = express();
app.use(express.urlencoded({extended: true}));
app.use("/book", bookRoute);

// Handle CORS POLICY
app.use(cors())


// Connnect MongoDB & if successful -> set port
try{
  await mongoose.connect(mongoDBURL);
  console.log("Connected to MongoDB")
  app.listen(PORT, ()=>{
    console.log(`Server running in http://localhost:${PORT}`)
  })
} catch (error){console.log(error)}

//------------------------------------------------------------------
// Setup HTTP routes

//1) Intro message
app.get("/", (req,res)=>{
  res.send("<h1>Hello there</h1>")
})

//No page exist error
app.get("*", (req,res) => {
  res.send({message: "This path does not exist"})
})