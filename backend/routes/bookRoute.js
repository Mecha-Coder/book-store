import express from "express"
import {Book} from "../models/bookModel.js"
const router = express.Router();

//Get all books
router.get("/", async (req,res)=>{

  try{
    const result = await Book.find()
    res.json({count: result.length, data: result})
  }
  catch (error){
    res.status(500).send({message: error.message})
  }
})

//Get a single book with all detaials
router.get("/:id", async (req,res)=>{

  try{
    const result = await Book.findById(req.params.id)
    res.json(result)
  }
  catch (error){
    res.status(500).send({message: error.message})
  }
})

//Create new book
router.post("/", async (req,res)=>{
  const {title, author, publishYear} = req.body

  try{

    if(!title || !author || !publishYear) { 
      res.status(400).send({message: "Please send required fields: title, author, publishYear"})
    } 
    else {
      const result = await Book.create({title, author, publishYear})
      res.json(result)
    }

  } 
  catch (error) {
    res.status(500).send({message: error.message})
  }

})

//Edit Book detail
router.put("/:id", async (req,res)=>{
  const {title, author, publishYear} = req.body
  
  try{

    if(!title || !author || !publishYear) { 
      res.status(400).send({message: "Please send required fields: title, author, publishYear"})
    } 
    else {
      const result = await Book.findByIdAndUpdate(req.params.id, req.body)
      
      if (!result) {res.status(404).send({message:"Book not found"})}
      else         {res.send({message:"Book update successfully"})}
    }

  } catch (error){
    res.status(500).send({message: error.message})
  }
})

//Delete book
router.delete("/:id", async (req, res) => {
  try{
    const result = await Book.findByIdAndDelete(req.params.id);

    if (!result) {res.status(404).send({message:"Book not found"})}
    else         {res.send({message:"Book deleted successfully"})}

  } catch (error) {res.status(500).send({message: error.message})}
})

export default router;